import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningPanelParticipantsComponent } from './planing-panel-participants.component';

describe('PlaningPanelParticipantsComponent', () => {
  let component: PlaningPanelParticipantsComponent;
  let fixture: ComponentFixture<PlaningPanelParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningPanelParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningPanelParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
