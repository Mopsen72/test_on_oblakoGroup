import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchPickerComponent } from './couch-picker.component';

describe('CouchPickerComponent', () => {
  let component: CouchPickerComponent;
  let fixture: ComponentFixture<CouchPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouchPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
