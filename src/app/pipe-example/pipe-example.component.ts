import { Component, OnInit } from '@angular/core';
import { finalize, map, Observable, startWith, timer, takeWhile } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  now = "2020-06-24T09:00:00.000Z";
  userId = "4321245";
  userIdChangeAfterFiveSeconds = "14324";
  users: User[] = [
    {
      name: "Truong Pham",
      age: 21
    },
    {
      name: "Tri Tran",
      age: 20
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];
  time$: Observable<number> = timer(0, 1000).pipe(
    map(val => 5 - (val + 1)),
    startWith(5),
    finalize(() =>{
      this.userIdChangeAfterFiveSeconds = "";
    }),
    takeWhile(val => val >= 0)
  )
  newUser: User;
  constructor(){
    this.newUser = new User();
  }

  ngOnInit(): void {
  }

  addUser(){
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }
}
