import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  providers: [NotificationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);
  toast = inject(NotificationService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    // role: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(1)])
  });
  formValue: any;
  submitted: boolean = false;

  submit() {
    this.formValue = this.loginForm.value;
    console.log(this.formValue)
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http.post("http://localhost:5000/api/auth/login", this.loginForm.value).subscribe(
      {
        next: (res: any) => {
          if (res) {
            this.toast.showSuccess('Yes working', 'success');
            localStorage.setItem('user', JSON.stringify(res));
            console.log(res, 'RESPONSE');
            if (res?.role == 0) {
              this.router.navigateByUrl('/admin/dashboard');
            } else if (res?.role == 1) {
              this.router.navigateByUrl('/vendor/dashboard');
            }
          }
        }, error: (err: any) => {
          debugger;
          this.toast.showError(err, 'Error')
        },
      }
      // (res: any) => {
      //   if (res) {
      //     this.toast.showSuccess('Yes working', 'success');
      //     localStorage.setItem('user', JSON.stringify(res));
      //     console.log(res, 'RESPONSE');
      //     if (res?.role == 0) {
      //       this.router.navigateByUrl('/admin/dashboard');
      //     } else if (res?.role == 1) {
      //       this.router.navigateByUrl('/vendor/dashboard');
      //     }
      //   }
      // }, error => {
      //   // debugger;
      //   this.toast.showError(error.message, 'Error')
      // }
    )
  }
}
