import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
  <h1>hello component work</h1>
  <h2>Your name: {{ user.name }}</h2>
  <h3>Your age: {{user.age}}</h3>
  <button (click)="showInfo()">Click me !</button>
  `,

})

export class HelloComponent{
  user = {
    name: 'Duy Trường',
    age: 21
  }
  showInfo(){
    alert('Inside Angular Component method');
  }
}
