import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdinaryComponent } from './add-ordinary.component';

describe('AddOrdinaryComponent', () => {
  let component: AddOrdinaryComponent;
  let fixture: ComponentFixture<AddOrdinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
