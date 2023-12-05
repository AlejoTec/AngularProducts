import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditsComponent } from './products-edits.component';

describe('ProductsEditsComponent', () => {
  let component: ProductsEditsComponent;
  let fixture: ComponentFixture<ProductsEditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsEditsComponent]
    });
    fixture = TestBed.createComponent(ProductsEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
