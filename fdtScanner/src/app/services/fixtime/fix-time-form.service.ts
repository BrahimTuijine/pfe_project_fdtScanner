import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FixTimeFormService {

  constructor() { }
  
  fixTimeForm = (time: string) => {
    return time.substring(0, 10) + ' -> ' + time.slice(11 , 16);
  };
}
