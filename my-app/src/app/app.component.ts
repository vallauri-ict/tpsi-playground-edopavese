import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Edoardo", "Camilla", "Roberta", "Filippo", "Maria", "Jennifer", "Chica Mala", "Sandra Bullock"];
  myName = "Edo";

  changeName(){
    this.myName = this.names[Math.floor(Math.random()*8)];
  }
}
