import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../shared/browser-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    fadeIn
  ]
})
export class HomeComponent implements OnInit {

  hoverFirst = false
  hoverSecond = false
  hoverThird = false
  hoverFourth = false

  firstLink = this.hoverFirst ? "Home" : "D"
  secondLink = "R"
  thirdLink = "E"
  fourthLink = "W"

  constructor() {
  }

  ngOnInit(): void {
  }

}
