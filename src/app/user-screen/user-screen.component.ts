import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  public questions: any;
  public currentIndex: number = 0;
  public quizFormGroup: FormGroup;
  public question: string;
  public option: any;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getQuestion().subscribe({
      next: (data: any) => {
        if (data.message > 0) {
          this.questions
        }
        else {
          alert("no questions added")
        }
      }
    })

  }

  public submitQuiz() {
  }
}
