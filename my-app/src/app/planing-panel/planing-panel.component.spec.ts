import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningPanelComponent } from './planing-panel.component';

describe('PlaningPanelComponent', () => {
  let component: PlaningPanelComponent;
  let fixture: ComponentFixture<PlaningPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
