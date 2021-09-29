import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  public questions: any;
  public ansFormGroup: FormGroup;
  public qnsArray:FormArray;

  constructor(private userservice: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userservice.getQuestion().subscribe({
      next: (data: any) => {
        console.log(data.message.length);
        if (data.message.length> 0) {
          this.questions = data.message;
          console.log(this.questions);
          this.initializeQnsForm();
        }
        else {
          alert("no questions added")
        }
      }
    })

  }
  private initializeQnsForm() {
    const setArray=new FormArray([]);
    this.questions.forEach(ele => {
      const choiceArray = new FormArray([]);
      ele.answer_options.forEach(element => {
        const questionChoiceArray1 = new FormGroup({
          question: new FormControl(element.question, Validators.required)
        });
        choiceArray.push(questionChoiceArray1);

      });

      let qns = this.fb.group({
        questionId: new FormControl(ele.id),
        questions: new FormControl(ele.question_details),
        option: choiceArray,
        selectedOption: new FormControl('', Validators.required)
      });
      setArray.push(qns);
    });
    this.ansFormGroup = this.fb.group({
    questionList:setArray
    });
  }
  public ques() {
    return this.ansFormGroup.get('questionList') as FormArray;
  }
  public submitQuiz() {
    if (this.ansFormGroup.valid) {
      let data = {
        user_id: JSON.parse(sessionStorage.getItem('user')).id,
        data: this.ansFormGroup.value.questionList.map(ele => { return { question_id: ele.questionId, user_options: ele.selectedOption } })
      }
      console.log(data);
      this.userservice.saveAnswer(data).subscribe({
        next: (data: any) => {
          if (data.success) {
            alert(data.message)
          }
          else{
            alert(data.message)
          }
        }
      })

    } else {
      alert("Please attend All the Question")
    }
  }
}
