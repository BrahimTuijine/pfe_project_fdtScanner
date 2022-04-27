import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FdtListService {
  constructor(private http: HttpClient) {}

  // headers = {
  //   Accept: 'application/json',
  //   Authorization: 'Bearer 2|1Pz6N103UG7xS75qw3td9rZkiy5g2o1VAZxBXd8t',
  // };

  getAllFdt = () => {
    return this.http.get<Fdtlist>('http://127.0.0.1:8000/api/fdtList', {
      // headers: this.headers,
    });
  };
}

export interface Fdtlist {
  id: number;
  fdtName: string;
  fdtLat: number;
  fdtLng: number;
  created_at?: Date;
  updated_at?: Date;
}
