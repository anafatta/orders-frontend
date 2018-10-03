import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomersDetailsComponent } from './view-customers-details.component';

describe('ViewCustomersDetailsComponent', () => {
  let component: ViewCustomersDetailsComponent;
  let fixture: ComponentFixture<ViewCustomersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
