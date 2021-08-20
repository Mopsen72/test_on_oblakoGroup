import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseSortComponent } from './menu-choise-sort.component';

describe('MenuChoiseSortComponent', () => {
  let component: MenuChoiseSortComponent;
  let fixture: ComponentFixture<MenuChoiseSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
