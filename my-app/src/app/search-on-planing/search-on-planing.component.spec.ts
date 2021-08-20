import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnPlaningComponent } from './search-on-planing.component';

describe('SearchOnPlaningComponent', () => {
  let component: SearchOnPlaningComponent;
  let fixture: ComponentFixture<SearchOnPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOnPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOnPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
