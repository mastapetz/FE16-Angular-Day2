import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cars: Array<{maker: string, type:string, price: number, kmCount: number}> =[
    {maker: "VW",
     type: "Golf",
    price: 14000,
    kmCount: 1000},
    {maker: "VW",
     type: "Polo",
    price: 9000,
    kmCount: 80000},
    {maker: "Nissan",
     type: "Skyline",
    price: 32000,
    kmCount: 0}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
