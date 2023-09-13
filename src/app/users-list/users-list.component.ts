import { Component, OnInit } from '@angular/core';
import { services } from '../Services/services-users';
import { Router } from '@angular/router';
import { User } from '../Models/Users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];
  username:any='';

  constructor(private router: Router, private service: services) { }
  ngOnInit(): void {

    this.username=localStorage.getItem('username');
    if (localStorage.getItem('token') != null) {

      this.service.GetUser().subscribe(data => {
        this.users = data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


  Close() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
