import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazysecondComponent } from './lazysecond.component';

describe('LazysecondComponent', () => {
  let component: LazysecondComponent;
  let fixture: ComponentFixture<LazysecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazysecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazysecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
