import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialreferralComponent } from './socialreferral.component';

describe('SocialreferralComponent', () => {
  let component: SocialreferralComponent;
  let fixture: ComponentFixture<SocialreferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialreferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialreferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
