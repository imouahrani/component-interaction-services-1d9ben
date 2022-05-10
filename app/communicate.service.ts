import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommunicateService{
  private communicateSource= new Subject<string>();

  communicateSourceHasNewMessage$= this.communicateSource.asObservable();

  publishMessage( message ){
      this.communicateSource.next(message);
      console.log(message +"published");
  }
}