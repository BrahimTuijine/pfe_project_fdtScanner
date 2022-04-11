import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetNotificationListService {
  constructor(private http: HttpClient) {}

  getNotificationList = () => {
    return this.http.get<Notification[]>(
      'http://127.0.0.1:8000/api/notification'
    );
  };
}

interface Notification {
  id: number;
  fdtName: string;
  value: number;
  mapLink: string;
  created_at: Date;
  updated_at: Date;
}
