import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['ninja'],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the ninja directory!';
  ninja = {
    name: 'Yoshi',
    belt: 'Black'
  };

  constructor() { }

  ngOnInit() {
  }

}
