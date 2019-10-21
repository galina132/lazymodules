import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lazyfirstComponent } from './lazyfirst.component';

describe('lazyfirstComponent', () => {
  let component: lazyfirstComponent;
  let fixture: ComponentFixture<lazyfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lazyfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lazyfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
