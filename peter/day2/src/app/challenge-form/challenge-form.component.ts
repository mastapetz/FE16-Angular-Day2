import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss']
})
export class ChallengeFormComponent implements OnInit {
  newCarArray: Array<{ maker: string, type:string, price: number, kmCount: number}> =[];
  
  newCar = new FormGroup({
    maker: new FormControl('test'),
    type: new FormControl('test2'),
    price: new FormControl(0),
    kmCount:new FormControl(0),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      var carsOut: any = this.newCar.value; //any is neded because without it the target array doent know what it will get, and with any this is "overwritten"
      this.newCarArray.push(carsOut)
      // this.newCars.push(this.newCar.value);
      console.log(carsOut);
      console.log(this.newCarArray);
    }
 

}
