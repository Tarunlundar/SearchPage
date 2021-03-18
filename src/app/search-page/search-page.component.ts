import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public defaultReactiveForm = { 
    name: '', 
    nationality: '', 
    mobileNumber: null,
    Seleteddate:''
  };

  public reactiveForm: FormGroup;
public reactiveTargetFields = ['#ReactiveFieldOne', '#ReactiveFieldTwo', '#ReactiveFieldThree','#Seleteddate'];
public mySetDateId04: string;
  myOptions04: { defaultDate: string; };
constructor(private formBuilder: FormBuilder) { }
public myDate04(): void {
  this.myOptions04 = {
    defaultDate: '2017-11-3'
  };
  this.mySetDateId04 = '2017-11-22';
}

  
  ngOnInit() {
    this.myDate04();
   this.reactiveForm = this.formBuilder.group({
      name: [this.defaultReactiveForm.name, Validators.compose([Validators.required])], 
      nationality: [this.defaultReactiveForm.nationality, Validators.compose([Validators.required])],
      mobileNumber: [this.defaultReactiveForm.mobileNumber, Validators.compose([Validators.required])],
      Seleteddate:[this.defaultReactiveForm.Seleteddate, Validators.compose([Validators.required])]
    });
    
  }
  public resetReactiveForm(): void {
    this.reactiveForm.reset(this.defaultReactiveForm);
    this.reactiveForm.markAsPristine();
    this.reactiveForm.markAsUntouched();
  }
  public onMobileNumberChange($event) {
    console.log('Mobile Number Changed...', $event);
  }
  onSubmit(){
    debugger;
    alert(JSON.stringify(this.reactiveForm.value));
  }
}
