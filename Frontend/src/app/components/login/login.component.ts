import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Username = '';
  Password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getlogin() {
    axios
      .post('http://localhost:4040/signin', {
        username: this.Username,
        password: this.Password,
      })
      .then((isres) => {
        this.router.navigateByUrl('home');
      });
  }
  getsignup() {
    this.router.navigateByUrl('signup');
  }
}
