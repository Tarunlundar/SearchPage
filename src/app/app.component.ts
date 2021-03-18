import { IMenuItem } from '@accelya/sdk/mcf-header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'Test App';
  onButtonClick(e) {
    this.router.navigate('/demo/app-demo');
    alert('fdfd');
  }
  appBrand = {
    name: 'Search Page',
    logo: 'acf_icon_accelya_footer'
  };
  privacyPolicy = {
    label: "Privacy Label",
    href: "#/input/defaults",
    newWindow: true
  };
  termsAndConditions = {
    label: "Terms Label",
    href: "#/alert/defaults"
  };
  public menuItems: Array<IMenuItem> = [
    {
      isSingleLevel: true,
      label: 'Home',
      title: 'Home',
      iconPosition: 'left',
      
    },
    {
      isSingleLevel: true,
      label: 'Tool',
      title: 'Tool',
      icon: ' acf_reorder-down',
      iconPosition: 'left',
      children: [{ label: '' }]
      //children: [{ label: 'T1' }, { label: 'T2' }]
    },
    {
      isSingleLevel: true,
      label: 'Admin',
      icon: 'acf_reorder-down',
      iconPosition: 'right',
      children: [{ label: '' }]
      //children: [{ label: 'User Master' }, { label: 'Role Master' }]
    }
  ];
  
  }
