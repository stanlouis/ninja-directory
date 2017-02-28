import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  inputs: ['ninja'],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the ninja directory!';
  myString = 'I like chicken';
  myBoolean = true;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e) {
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }
  alertMe() {
    alert('I have been clicked!');
  }
}
