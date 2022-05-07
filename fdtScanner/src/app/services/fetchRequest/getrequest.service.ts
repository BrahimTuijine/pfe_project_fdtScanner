import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../envirement';

@Injectable({
  providedIn: 'root',
})
export class GetrequestService {
  constructor(private http: HttpClient) {}

  getRequests = () => {
    return this.http.get<Request>( HOST +'/fdtRequest');
  };
}

export interface Request {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
