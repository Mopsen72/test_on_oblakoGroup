import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseProgrammComponent } from './menu-choise-programm.component';

describe('MenuChoiseProgrammComponent', () => {
  let component: MenuChoiseProgrammComponent;
  let fixture: ComponentFixture<MenuChoiseProgrammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseProgrammComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
