import { Component, OnInit } from '@angular/core';
import { User } from '../Models/Users';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { services } from '../Services/services-users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User;
  confirm: User = new User;
  constructor(private router: Router, private service: services) { }
  ngOnInit(): void {

  }





  async register() {

    if (this.confirm.password == this.user.password) {
      try {
        const res = await this.service.Register(this.user.userName, this.user.password).toPromise();
        if (res.statusCode == 200) {
          
          this.router.navigate(['/login']);
        } else {
          this.ShowResult(res.message);
        }
      } catch (error) {
        this.ShowResult('Something were wrong!!!');
      }
    } else
      this.ShowResult('The password must be the same!!');
  }

  ShowResult(message: any) {

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
