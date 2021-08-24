import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSelectWithoutPickComponent } from './menu-select-without-pick.component';

describe('MenuSelectWithoutPickComponent', () => {
  let component: MenuSelectWithoutPickComponent;
  let fixture: ComponentFixture<MenuSelectWithoutPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSelectWithoutPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSelectWithoutPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
