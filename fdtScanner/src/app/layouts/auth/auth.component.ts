import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.autoLogin();
  }

  autoLogin = () => {
    const userdata = localStorage.getItem('userData');
    if (!userdata) {
      return;
    } else {
      this.router.navigate(['/dashboard']);
    }
  };
}
