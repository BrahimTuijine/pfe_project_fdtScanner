import { LoginService } from './../../services/auth/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toast: NgToastService
  ) {}

  submit(): void {
    if (this.validateForm.valid) {
      this.loginService.login(this.validateForm.value).subscribe({
        next: (data) => {
          // console.log(data);
          localStorage.setItem('userData', JSON.stringify(data));
          this.toast.success({
            detail: 'SUCCESS Message',
            summary: 'Login Successfully',
            duration: 5000,
          });
          this.gotoDashboard();
        },
        error: (error) => {
          this.toast.error({
            detail: 'ERROR Message',
            summary: 'Login Failed, Try again later !!',
            duration: 5000,
          });
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
        }
      });
    }
  }
  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }
}
