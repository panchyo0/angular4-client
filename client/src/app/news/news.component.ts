import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news=[
    {
      "slug": 1,
      "auth":"Trevor Wiens",
      "Tag":["LOUIS Toolkit","First Nations advisory group"],
      "title": "Assets Development Update",
      "date":" Oct. 25, 2017",
      "description":"We showed our recent changes to LOUIS Assets to our First Nations advisory group on the 19th of October. It was nice to hear we were on the right track and get focused feedback to guide the next stages of the development of LOUIS Assets."
    },{
      "slug": 2,
      "auth":"Trevor Wiens",
      "Tag":["LOUIS Toolkit","WFS","Reference Layers","geometries from"],
      "title": "Enhanced Use of External Data",
      "date":" Oct. 13, 2017",
      "description":"The LOUIS Toolkit allows users to connect to remote data (WFS) servers and use that data in evaluating proposals. We have now added an option, called Reference Layers, which enables users to create new geometries by selecting and copying geometries from external servers. This is especially useful for documenting site visits of areas defined in terms of legal land descriptions."
    },{
      "slug": 3,
      "auth":"Trevor Wiens",
      "Tag":["LOUIS Map Biographer 1.3.3","LOUIS Heritage"],
      "title": "LOUIS Map Biographer 1.3.3 Release",
      "date":" April 3, 2017",
      "description":"LOUIS Map Biographer 1.3.3 has been released and provides some fixes for the upload of data to LOUIS Heritage."
    },{
      "slug": 4,
      "auth":"Trevor Wiens",
      "Tag":["LOUIS Map Biographer 1.3.2","Windows 10"],
      "title": "LOUIS Map Biographer 1.3.2 Release",
      "date":"  Oct. 6, 2016",
      "description":"LOUIS Map Biographer 1.3.2 has been released and adds some minor fixes to work better under Windows 10."
    },{
      "slug": 5,
      "auth":"Trevor Wiens",
      "Tag":["LOUIS Map Biographer 1.3.1","UI improvements"],
      "title": "LOUIS Map Biographer 1.3.1 Release",
      "date":" Aug. 30, 2016",
      "description":"We are pleased to announce the release of LOUIS Map Biographer 1.3.1. Map Biographer 1.3.1 adds polish to the enhancements found in 1.3.0 and has many minor UI improvements."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
