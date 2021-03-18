import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MppageComponent } from './mppage.component';

describe('MppageComponent', () => {
  let component: MppageComponent;
  let fixture: ComponentFixture<MppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
