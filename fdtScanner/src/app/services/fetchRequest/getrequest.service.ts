import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetrequestService {
  constructor(private http: HttpClient) {}

  getRequests = () => {
    return this.http.get<Request>('http://127.0.0.1:8000/api/fdtRequest');
  };
}

export interface Request {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
