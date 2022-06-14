import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  
  contactInfo = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    textField: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
  });
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.contactInfo.valid){
      var contactOut = this.contactInfo.value;
      console.log(contactOut);
    }
  }

}
