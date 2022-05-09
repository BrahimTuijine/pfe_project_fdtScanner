import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../envirement';

@Injectable({
  providedIn: 'root',
})
export class GetrequestService {
  constructor(private http: HttpClient) {}

  getRequests = () => {
    return this.http.get<FdtRequest>(HOST + '/fdtRequest');
  };

  updateRequest = (request: FdtRequest) => {
    return this.http.put<FdtRequest>(
      HOST + '/fdtRequest/' + request.id,
      request
    );
  };
}

export interface FdtRequest {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  state: string;
  user: string;
}
