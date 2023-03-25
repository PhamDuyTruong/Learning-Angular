import { Component } from '@angular/core';

@Component({
  selector: 'app-bai05',
  templateUrl: './bai05.component.html',
  styleUrls: ['./bai05.component.css']
})
export class Bai05Component {
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
      age: 21
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
      age: 13
    },
    // more data
  ];
}
