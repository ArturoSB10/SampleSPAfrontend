import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../Services/services-users';
import Swal from 'sweetalert2';
import { User } from '../Models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User;
  constructor(private router:Router, private service:services) {}
  ngOnInit(): void {

  }





  async login(){
    
    try {
      const res = await this.service.LogIn(this.user.userName,this.user.password).toPromise();
      if (res.statusCode == 200) {
        localStorage.setItem('username', this.user.userName);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/usersList']);
      } else {
        this.ShowResult(res.message);
      }
    } catch (error) {
      this.ShowResult('Something were wrong!!!');
    }

  }

  ShowResult(message:any){

    Swal.fire({
      text: message,
      icon: 'info',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'blue',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCancelButton: false,
      
    }).then((result) => {
      
    });
  }
}
