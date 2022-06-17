import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';

  countClick() {
    this.clickCounter++;
  }

  setClasses() {
    return {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4
    };
  }
}
