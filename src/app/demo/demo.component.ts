import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  myTargetFields=['#FieldOne','#FieldTwo', '#FieldThree'];
  myDummyObjectForFormSubmit = {};
  myFormNameMsg = {error: 'Please enter your Name'};
  myFormNationalityMsg = {error: 'Please enter your Nationality number'};
  myFormMobileNumberMsg = {error: 'Please enter your Mobile number'};
  myABCD = {error: 'Please enter ABCD '};
  customValidationRegex = /ABCD/;


  onButtonClick(e) {
    console.log('onButtonClick', e);
  }

  FieldOneOnChange(e){
    this.myDummyObjectForFormSubmit['Name'] = e.value
  }

  FieldTwoOnChange(e){
    this.myDummyObjectForFormSubmit['Nationality'] = e.value
  }

  FieldThreeOnChange(e){
    this.myDummyObjectForFormSubmit['Mobile'] = e.value
  }

  onSubmit(){
    console.log('working',this.myDummyObjectForFormSubmit);
  }

  
}
