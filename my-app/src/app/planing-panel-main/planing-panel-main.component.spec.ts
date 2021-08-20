import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningPanelMainComponent } from './planing-panel-main.component';

describe('PlaningPanelMainComponent', () => {
  let component: PlaningPanelMainComponent;
  let fixture: ComponentFixture<PlaningPanelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningPanelMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningPanelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
