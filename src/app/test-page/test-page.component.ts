import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  myTargetFields=['#FirstName','#LastName'];
  myDummyObjectForFormSubmit = {};

  constructor() { }
  FirstNameOnChange(e){
    this.myDummyObjectForFormSubmit['FirstName'] = e.value;
  }
  LastNameOnChange(e){
    this.myDummyObjectForFormSubmit['LastName'] = e.value;
  }
  onSubmit(){
    console.log('working',this.myDummyObjectForFormSubmit);
  }
  ngOnInit() {
  }

}
