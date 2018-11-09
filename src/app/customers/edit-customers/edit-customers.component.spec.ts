import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomersDetailsComponent } from './edit-customers.component';

describe('EditCustomersDetailsComponent', () => {
  let component: EditCustomersDetailsComponent;
  let fixture: ComponentFixture<EditCustomersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
