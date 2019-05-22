import { Component } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isIn = false;

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  
}
