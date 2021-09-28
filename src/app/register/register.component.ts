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
      userName: ['', [
        Validators.required
      ]],
      firstName: ['', [
        Validators.required
      ]],
      lastName: [''],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required
      ]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.pattern(/^[0-9]{0,9}$/)]]
    });
  }
  public getFormControl(name: string) {
    return this.signupForm.get(name);
  }
  passwordCheck() {
    if (this.signupForm.value.password != this.signupForm.value.confirmPassword) {
      return false;
    } else {
      return true;
    }

  }
  onSubmit() {
    this.msgs=[];
    if (this.signupForm.valid && this.passwordCheck()) {
      this.userService.userRegister(this.signupForm.value).subscribe(
        {
          next: (data: any) => {
            if (data.status) {
              this.msgs.push({ severity: 'success', summary: 'Success', detail: data.message })
              setTimeout(() => {
                this.router.navigateByUrl('/login');
              }, 2000);
            } else {
              this.msgs.push({ severity: 'error', summary: 'Error', detail: data.message })
            }
          }
        });
    } else {
      if (!this.signupForm.valid) {
        // this.msgs.push({ severity: 'error', summary: 'Error', detail: "* fields are required" })
        alert("* Fields Are Required")
      } else {
        this.msgs.push({ severity: 'error', summary: 'Error', detail: "Password and confirm password are not same" })
      }
    }
  }
}