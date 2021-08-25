import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoiseLessonComponent } from './menu-choise-lesson.component';

describe('MenuChoiseLessonComponent', () => {
  let component: MenuChoiseLessonComponent;
  let fixture: ComponentFixture<MenuChoiseLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChoiseLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoiseLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
