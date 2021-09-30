import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { UserScreenComponent } from './user-screen/user-screen.component';

const routes: Routes = [
  { path: "addQuestion", component: AddQuestionComponent },
  { path: "userScreen", component: UserScreenComponent },
  { path: 'summaryreport', component: SummaryReportComponent},
  { path: "signup", component: RegisterComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
