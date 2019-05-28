import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductjsonComponent } from './productjson.component';

describe('ProductjsonComponent', () => {
  let component: ProductjsonComponent;
  let fixture: ComponentFixture<ProductjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
