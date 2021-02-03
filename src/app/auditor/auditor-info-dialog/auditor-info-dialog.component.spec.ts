import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorInfoDialogComponent } from './auditor-info-dialog.component';

describe('AuditorInfoDialogComponent', () => {
  let component: AuditorInfoDialogComponent;
  let fixture: ComponentFixture<AuditorInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
