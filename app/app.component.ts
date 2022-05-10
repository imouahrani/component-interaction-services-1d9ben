import { Component,OnInit} from '@angular/core';
import {CommunicateService} from './communicate.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
    constructor(private cs:CommunicateService){
      console.log("app component constructor");
    }
  name = 'Angular 5';
  recievedMessage:string;
  ngOnInit(){
    console.log("in app component onit");
     this.cs.communicateSourceHasNewMessage$.subscribe(message=>{
       this.recievedMessage=message;
        console.log("sds"+message);
     });
  }
}
