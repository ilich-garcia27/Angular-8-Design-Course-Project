import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Brew } from './test';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews!: Brew[]; // This will hold all of the results that it returned from that API.

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data as Brew[];
    });
  }

}
