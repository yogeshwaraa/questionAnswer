import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class SummaryReportComponent implements OnInit {
 
  public questions: any;
  public ansFormGroup: FormGroup;
  public qnsArray:FormArray;

  constructor(private userservice: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userservice.getReport().subscribe({
      next: (data: any) => {
        console.log(data.details.length);
        if (data.details.length> 0) {
          this.questions = data;
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
    this.questions.details.forEach(ele => {
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
        selectedOption: new FormControl(parseInt(ele.user_options), Validators.required),
        crtAns: new FormControl(parseInt(ele.crt_answer))
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
 
}
