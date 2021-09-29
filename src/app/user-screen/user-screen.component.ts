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

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getQuestion().subscribe({
      next: (data: any) => {
        if (data.message.length() > 0) {
          this.questions = data.message
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
