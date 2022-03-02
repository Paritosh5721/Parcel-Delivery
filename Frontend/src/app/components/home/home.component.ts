import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  type = '';
  price = '';
  ngOnInit(): void {}
  getsubmit() {
    axios.post('http://localhost:4040/api/calculateprice', {
      type: this.type,
      price: this.price,
    });
  }
}
