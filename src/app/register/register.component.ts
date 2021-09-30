import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  "signupForm": FormGroup;
  "user":any;
  "msgs": any = [];
  "signupformValidation": boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { };

  ngOnInit() {
    this.signupForm = this.fb.group({
      user_type: ['', [
        Validators.required
      ]],
      first_name: ['', [
        Validators.required
      ]],
      last_name: [''],
      password: ['', [
        Validators.required
      ]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  public getFormControl(name: string) {
    return this.signupForm.get(name);
  }
  // passwordCheck() {
  //   if (this.signupForm.value.password != this.signupForm.value.confirmPassword) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  // }
  onSubmit() {
    this.msgs=[];
    if (this.signupForm.valid) {
      this.userService.userRegister(this.signupForm.value).subscribe(
        {
          next: (data: any) => {
            if (data.success) {
              alert("registed successfully")
              setTimeout(() => {
                this.router.navigateByUrl('/login');
              }, 2000);
            } else {
              alert(data.message)
            }
          }
        });
    } else {
      if (!this.signupForm.valid) {
        // this.msgs.push({ severity: 'error', summary: 'Error', detail: "* fields are required" })
        alert("* Fields Are Required")
      } else {
        alert("Password and confirm password are not same")
      }
    }
  }
}