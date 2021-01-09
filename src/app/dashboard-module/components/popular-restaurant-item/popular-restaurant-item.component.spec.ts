import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRestaurantItemComponent } from './popular-restaurant-item.component';

describe('PopularRestaurantItemComponent', () => {
  let component: PopularRestaurantItemComponent;
  let fixture: ComponentFixture<PopularRestaurantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularRestaurantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRestaurantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
