import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {  }

  log(message: string, obj?: unknown){

    if(!environment.production){
      console.log(message, obj);
    }

  }
}


