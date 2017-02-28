import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Stan app works!';
  name = 'Ninja';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  yell(e){
    alert("I am yelling");
  }
}
