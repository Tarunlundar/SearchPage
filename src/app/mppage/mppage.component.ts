import { IMenuItem } from '@accelya/sdk/mcf-header';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMcfTabsNewTabOptions } from '@accelya/sdk/mcf-tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mppage',
  templateUrl: './mppage.component.html',
  styleUrls: ['./mppage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MppageComponent implements OnInit {
  myTargetFields=['#FieldOne','#FieldTwo', '#FieldThree'];
  OriginErrorMsg= {error: 'Please enter Origin'};
  DestinationErrorMsg= {error: 'Please enter Destination'};
  ShipDateErrorMsg= {error: 'Please enter Ship Date'};
  GoodsDescriptionErrorMsg= {error: 'Please enter Goods Description'};
  CommodityCodeErrorMsg= {error: 'Please enter Commodity Code'};
  PiecisErrorMsg= {error: 'Please enter Piecis'};
  weightErrorMsg= {error: 'Please enter weight'};
  VolumeErrorMsg= {error: 'Please enter Volume'};

  public reactiveForm: FormGroup;
public reactiveTargetFields = ['#Origin', '#Destination', '#ShipDate','#GoodsDescription',
                            '#CommodityCode','#Piecis','#weight','#Volume',
                            '#specialHeadlingCode','#Product'];

  public defaultReactiveForm = { 
    Origin: '', 
    Destination: '', 
    ShipDate: '',
    ShipByLbl: '',
    GoodsDescription:'',
    CommodityCode:'',
    Piecis:'',
    weight:'',
    Volume:'',
    specialHeadlingCode:'',
    Product:''
  };

  

  myDummyObjectForFormSubmit = {};
  
  value;
  ShipDate: string;
  myOptions04;


  weightval = {};
  Volumeval = {};

  weightvalueConfig = {
    items: ['Kg', 'Lb', 'G'],
    placeholder: 'Enter Weight',
    id: 'Weight',
    label: 'Weight',
    name: 'weight',
    required: 'true',
    datatype: 'multiple',
    inputtype: 'text',
    transform: 'uppercase',
    mcfClass: 'dontShowInline',
    selectedItem: '0',
    disabled: false,
    messages:"weightErrorMsg",
    formControlName:"weight",
    value:''
  };
  VolumevalueConfig = {
    items: ['CM'],
    placeholder: 'Enter Volume',
    label: 'Volume',
    name: 'Volume',
    required: 'true',
    datatype: 'multiple',
    id: 'Volume',
    inputtype: 'text',
    transform: 'uppercase',
    mcfClass: 'dontShowInline',
    selectedItem: '0',
    disabled: false,
    messages:"VolumeErrorMsg",
    formControlName:"Volume",
    value:''
  };

  
  messages = { error: 'Invalid Weight' };

  myValidation;

  constructor( private formBuilder: FormBuilder) { }
  airlines = [
    { id: 1, name: 'Air Europa' },
    { id: 2, name: 'Air France' },
    { id: 3, name: 'Delta Airlines' },
    { id: 4, name: 'Iberia' },
    { id: 5, name: 'Air Malta' },
    { id: 6, name: 'Qatar Airways' },
    { id: 7, name: 'Aerolineas Argentinas' }
  ];
 Product_SeletedData;
  Product = [
  { id: 1, name: 'Volvo' },
  { id: 2, name: 'Saab', disabled: true },
  { id: 3, name: 'Opel' },
  { id: 4, name: 'Audi' },
];



  ngOnInit() {
    this.value = this.SearchDataList[0];
    this.myDate04();
    this.reactiveForm = this.formBuilder.group({
      Origin: [this.defaultReactiveForm.Origin, Validators.compose([Validators.required])], 
      Destination: [this.defaultReactiveForm.Destination, Validators.compose([Validators.required])],
      ShipDate: [this.defaultReactiveForm.ShipDate, Validators.compose([Validators.required])],
     // ShipByLbl: [this.defaultReactiveForm.ShipByLbl, Validators.compose([Validators.required])],
      GoodsDescription:[this.defaultReactiveForm.GoodsDescription, Validators.compose([Validators.required])],
      CommodityCode:[this.defaultReactiveForm.CommodityCode, Validators.compose([Validators.required])],
      Piecis:[this.defaultReactiveForm.Piecis, Validators.compose([Validators.required])],
      weight:[this.defaultReactiveForm.weight, Validators.compose([Validators.required])],
      Volume:[this.defaultReactiveForm.Volume, Validators.compose([Validators.required])],
      specialHeadlingCode:[this.defaultReactiveForm.specialHeadlingCode, Validators.compose([Validators.required])],
      Product:[this.defaultReactiveForm.Product, Validators.compose([Validators.required])],

     
    });
    this.reactiveForm.value
  }
  onButtonClick(e) {
   // console.log('onButtonClick', e);
   //alert(this.myDummyObjectForFormSubmit['SearchText'])
   alert(JSON.stringify(this.myDummyObjectForFormSubmit));
  }
  FieldOneOnChange(e){
    this.myDummyObjectForFormSubmit['SearchText'] = e.value
  }
  onSubmit(){
    debugger;
    alert(JSON.stringify(this.reactiveForm.value));
  }
  SearchDataList = [
    { id: 1, name: 'DOC.NO.' },
  ];
  public myDate04(): void {
    this.myOptions04 = {
      defaultDate: '2021-03-17'
    };
   // this.ShipDate = Date.now.toString();
  }
}