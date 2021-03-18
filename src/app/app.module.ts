import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {McfHeaderModule} from '@accelya/sdk/mcf-header' 
import {McfFooterModule } from '@accelya/sdk/mcf-footer' 
import { McfInputModule } from "@accelya/sdk/mcf-input";
import { McfButtonModule } from "@accelya/sdk/mcf-button";
import { TestPageComponent } from './test-page/test-page.component';
import { McfDateTimeModule } from '@accelya/sdk/mcf-datetime';
import { McfAutocompleteModule } from '@accelya/sdk/mcf-autocomplete';
import { SearchPageComponent } from './search-page/search-page.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MppageComponent } from './mppage/mppage.component';
import { McfSelectModule } from '@accelya/sdk/mcf-select';
import { McfValueSelectorModule } from '@accelya/sdk/mcf-value-selector';





@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    SearchPageComponent,
    DemoComponent,
    MppageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    McfHeaderModule,
    McfFooterModule,
    McfInputModule,
    McfButtonModule,
    McfDateTimeModule,
    McfAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    McfSelectModule ,
    McfValueSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
