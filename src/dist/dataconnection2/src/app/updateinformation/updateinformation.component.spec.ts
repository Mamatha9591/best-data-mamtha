import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinformationComponent } from './updateinformation.component';

describe('UpdateinformationComponent', () => {
  let component: UpdateinformationComponent;
  let fixture: ComponentFixture<UpdateinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
