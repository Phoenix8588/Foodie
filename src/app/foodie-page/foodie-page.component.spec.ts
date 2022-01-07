import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiePageComponent } from './foodie-page.component';

describe('FoodiePageComponent', () => {
  let component: FoodiePageComponent;
  let fixture: ComponentFixture<FoodiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
