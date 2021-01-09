import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoryItemComponent } from './popular-category-item.component';

describe('PopularCategoryItemComponent', () => {
  let component: PopularCategoryItemComponent;
  let fixture: ComponentFixture<PopularCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
