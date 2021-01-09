import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverAndBookComponent } from './discover-and-book.component';

describe('DiscoverAndBookComponent', () => {
  let component: DiscoverAndBookComponent;
  let fixture: ComponentFixture<DiscoverAndBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverAndBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverAndBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
