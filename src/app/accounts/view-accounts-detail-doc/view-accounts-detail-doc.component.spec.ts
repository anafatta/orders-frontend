import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountsDetailDocComponent } from './view-accounts-detail-doc.component';

describe('ViewAccountsDetailDocComponent', () => {
  let component: ViewAccountsDetailDocComponent;
  let fixture: ComponentFixture<ViewAccountsDetailDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccountsDetailDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountsDetailDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
