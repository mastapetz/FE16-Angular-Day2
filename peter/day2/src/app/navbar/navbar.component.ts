import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string ="Car Rental"
  lableBtn: string ="Donate 10 €"
  clickCounter :number = 0;
  contact: string ="Contact Us";
  challenge: string ="Challenge";
  constructor() { }
  countClick(){

    this.clickCounter +=10;
    console.log(this.clickCounter);

}
  ngOnInit(): void {
  }

}
