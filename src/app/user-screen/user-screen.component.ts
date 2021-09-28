import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {

  public quizlength: number;
  public currentIndex: number = 0;  
  public quizFormGroup: FormGroup;  
  public question: string;  
  public option: any;

  constructor() { }

  ngOnInit(): void {
  }

  public submitQuiz() {
  }
}
