import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountsDetailComponent } from './view-accounts-detail.component';

describe('ViewAccountsDetailComponent', () => {
  let component: ViewAccountsDetailComponent;
  let fixture: ComponentFixture<ViewAccountsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccountsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
