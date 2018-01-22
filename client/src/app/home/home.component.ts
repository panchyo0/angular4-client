import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'LOUIS Toolkit';
  newstart=[
    {
      "slug": 1,
      "description": "Assets Development Update",
      "date":" Oct. 25, 2017",
    }
  ]
  news=[
    {
      "slug": 2,
      "description": "LOUIS Map Biographer 1.3.2 Release",
      "date":"  Oct. 6, 2016",
    },{
      "slug": 3,
      "description": "Enhanced Use of External Data",
      "date":" Oct. 13, 2017",
    },{
      "slug": 4,
      "description": "LOUIS Map Biographer 1.3.3 Release",
      "date":" April 3, 2017",
    },{
      "slug": 5,
      "description": "LOUIS Map Biographer 1.3.1 Release",
      "date":" Aug. 30, 2016",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
