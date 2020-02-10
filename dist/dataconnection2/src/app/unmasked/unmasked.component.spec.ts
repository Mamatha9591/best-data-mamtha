import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmaskedComponent } from './unmasked.component';

describe('UnmaskedComponent', () => {
  let component: UnmaskedComponent;
  let fixture: ComponentFixture<UnmaskedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnmaskedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmaskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
