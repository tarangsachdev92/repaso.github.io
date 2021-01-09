import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantBannerComponent } from './view-restaurant-banner.component';

describe('ViewRestaurantBannerComponent', () => {
  let component: ViewRestaurantBannerComponent;
  let fixture: ComponentFixture<ViewRestaurantBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRestaurantBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
