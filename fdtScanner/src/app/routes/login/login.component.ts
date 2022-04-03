import { LoginService } from './../../services/auth/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  respense = {};
  submit(): void {
    if (this.validateForm.valid) {
      this.loginService.login(this.validateForm.value).subscribe((data) => {
        console.log(data);
        
      });
      console.log(this.respense);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
        }
      });
    }

    // console.log(this.validateForm.valid);
  }

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

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
