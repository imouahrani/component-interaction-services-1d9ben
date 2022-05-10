import { Component, Input } from '@angular/core';
import { CommunicateService } from './communicate.service';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <button (click)="send()">Send</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private cs: CommunicateService) {
    console.log('hello constructor');
  }
  @Input() name: string;
  a = 90;

  send() {
    if (this.a == 90) {
      this.cs.publishMessage('from child 90');
      this.a = 80;
    } else {
      this.a = 90;
      this.cs.publishMessage('from child 80');
    }
  }
}
