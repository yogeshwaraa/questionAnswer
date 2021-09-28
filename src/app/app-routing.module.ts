import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [ 
   { path: "addQuestion", component: AddQuestionComponent},
// { path: "home/user", component: ViewTweetComponent},
// { path: 'addTweet', component: AddUpdateTweetComponent},
// { path: 'updateTweet', component: AddUpdateTweetComponent},
// { path: 'signup', component: RegisterComponent },
// { path: "", redirectTo: "login", pathMatch: "full" },
// { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
