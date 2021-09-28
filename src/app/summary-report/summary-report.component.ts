import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class SummaryReportComponent implements OnInit {
  title = 'User Test Report';
  public correctionForm: FormGroup;
  questionsArray = new FormArray([]);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeValuationForm();
  }

  initializeValuationForm() {
    this.correctionForm = this.fb.group({
      questions: this.questionsArray,
    });
  }
  get questions() {
    return this.correctionForm.get('questions') as FormArray;
  }
  // public submitCorrection() {

  // }

}
