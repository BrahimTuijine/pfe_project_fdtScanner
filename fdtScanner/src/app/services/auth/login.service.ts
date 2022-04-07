import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  headers = { Accept: 'application/json' };

  login(body: any) {
    return this.http.post<LoginResponse>(
      'http://127.0.0.1:8000/api/login',
      body,
      {
        headers: this.headers,
      }
    );
  }
}

interface LoginResponse {
  user: User;
  token: string;
}
interface User {
  id: number;
  name?: string;
  email: string;
  email_verified_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
