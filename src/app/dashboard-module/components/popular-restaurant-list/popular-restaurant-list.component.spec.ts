import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRestaurantListComponent } from './popular-restaurant-list.component';

describe('PopularRestaurantListComponent', () => {
  let component: PopularRestaurantListComponent;
  let fixture: ComponentFixture<PopularRestaurantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularRestaurantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
