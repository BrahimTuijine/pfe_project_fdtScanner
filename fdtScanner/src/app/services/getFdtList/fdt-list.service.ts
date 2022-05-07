import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../envirement';

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
    return this.http.get<Fdtlist>(HOST + '/fdtList');
  };

  updateFdt = (fdt: Fdtlist) => {
    return this.http.put<Fdtlist>(HOST + '/fdtList/' + fdt.id, fdt);
  }
}

export interface Fdtlist {
  id: number;
  fdtName: string;
  fdtLat: number;
  fdtLng: number;
  created_at?: Date;
  updated_at?: Date;
}

