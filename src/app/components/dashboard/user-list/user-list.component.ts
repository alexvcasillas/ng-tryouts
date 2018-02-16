import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  ngOnInit() {
    this.users = [
      {
        id: '354bad6',
        name: 'Alex',
        lastName: 'Casillas',
        age: 27,
        email: 'alexvcasillas@gmail.com'
      },
      {
        id: '372abf8',
        name: 'Antonio',
        lastName: 'Cobos',
        age: 31,
        email: 'acoboscabello@gmail.com'
      }
    ];
  }
}
