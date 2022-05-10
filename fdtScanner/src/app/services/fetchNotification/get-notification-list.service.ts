import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../envirement';

@Injectable({
  providedIn: 'root',
})
export class GetNotificationListService {
  constructor(private http: HttpClient) {}

  getNotificationList = () => {
    return this.http.get<Notification[]>(
      HOST +'/notification'
    );
  };

  getNotificationsById = (id: number) => {
    return this.http.get<Notification>(
      HOST +'/notification/' + id
    );
  };
}

export interface Notification {
  id: number;
  fdtName: string;
  value: number;
  type:string;
  mapLink: string;
  created_at: Date;
  updated_at: Date;
}
