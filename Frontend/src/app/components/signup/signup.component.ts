import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  Email = '';
  Password = '';
  Username = '';
  Phone = '';
  Name = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  getdata() {
    // alert('clicked');
    // console.log(this.Email);
    // console.log(this.Password);
    axios
      .post('http://localhost:4040/register', {
        name: this.Username,
        username: this.Username,
        email: this.Email,
        phone: this.Phone,
        password: this.Password,
      })
      .then((isres) => {
        this.router.navigateByUrl('login');
      });
  }
}
