import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoisePeriodComponent } from './menu-choise-period.component';

describe('MenuChoisePeriodComponent', () => {
  let component: MenuChoisePeriodComponent;
  let fixture: ComponentFixture<MenuChoisePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoisePeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoisePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
