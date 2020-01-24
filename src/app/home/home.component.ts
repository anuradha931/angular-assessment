import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    {year :2020 , month :1},
    {year :2020 , month :2},
    {year :2020 , month :3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
