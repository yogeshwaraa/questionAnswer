import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  title = 'ADD Question';
  qnsForm: FormGroup;
  questionsArray = new FormArray([]);

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.initializeQnsForm();
  }

  get questions() {
    return this.qnsForm.get('questions') as FormArray;
  }

  private initializeQnsForm() {
    this.qnsForm = this.fb.group({
      questions: this.questionsArray,
    });
    this.addQuestion();
  }

  onSubmitQns() {
    if(this.qnsForm.valid){
      console.log(this.qnsForm.value);
    }else{
      console.log("invalid");
    }
  }

  public addQuestion() {      

    const questionChoiceArray1 = new FormGroup({
      question: new FormControl('', Validators.required)
    });

    const questionChoiceArray2 = new FormGroup({
      question: new FormControl('', Validators.required)
    });

    const questionChoiceArray3 = new FormGroup({
      question: new FormControl('', Validators.required)
    });

    const questionChoiceArray4 = new FormGroup({
      question: new FormControl('', Validators.required)
    });

    const choiceArray = new FormArray([questionChoiceArray1, questionChoiceArray2, questionChoiceArray3, questionChoiceArray4]);

    const question = new FormGroup({
      questionId: new FormControl(null),
      question: new FormControl('', [Validators.required, Validators.maxLength(999)]),
      questionOptions: choiceArray,
      correctOption:new FormControl(null,Validators.required)
    });

    this.questionsArray.push(question);
  }

  public removeQuestion(index) {   
    this.questionsArray.removeAt(index);
  }

}
