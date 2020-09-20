import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  fullName: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit(){}
 
  processForm(){
  const allInfo = 'My name is'+ this.fullName + '. My email is ' + this.email + '. My message is ' + this.message;
    alert(allInfo);
  }
}