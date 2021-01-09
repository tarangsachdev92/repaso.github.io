import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoryListComponent } from './popular-category-list.component';

describe('PopularCategoryListComponent', () => {
  let component: PopularCategoryListComponent;
  let fixture: ComponentFixture<PopularCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
