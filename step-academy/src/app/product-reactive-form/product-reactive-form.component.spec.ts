import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReactiveFormComponent } from './product-reactive-form.component';

describe('ProductReactiveFormComponent', () => {
  let component: ProductReactiveFormComponent;
  let fixture: ComponentFixture<ProductReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
