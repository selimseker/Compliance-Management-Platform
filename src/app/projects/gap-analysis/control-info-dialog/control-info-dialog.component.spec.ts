import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInfoDialogComponent } from './control-info-dialog.component';

describe('ControlInfoDialogComponent', () => {
  let component: ControlInfoDialogComponent;
  let fixture: ComponentFixture<ControlInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
