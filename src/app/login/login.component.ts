import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  "msgs": any = [];
  "username": String;
  "loginForm": FormGroup;
  "isLoggedIn": boolean;
  "formValidation": boolean = true;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
  login() {
    this.msgs = [];
    if (this.loginForm.valid) {
      this.userService.userLogin(this.loginForm.value).subscribe({
        next: (data: any) => {
          if (data.success) {
            sessionStorage.setItem("user",JSON.stringify(data))
            if (data.user_type == 'Admin'){
              this.router.navigateByUrl('/addQuestion');
            }
            else{
              this.router.navigateByUrl('/userScreen');
            }
          } else {
            alert(data.message);
            // this.msgs.push({ severity: 'error', summary: 'Error', detail: data.message })
            // this.auth.isLoggedIn = false;
          }
        }
      });
    } else {
      // this.msgs.push({ severity: 'error', summary: 'Error', detail: "* field are mandatory" })
      alert("*field are mandatory");
    }
  }

}
