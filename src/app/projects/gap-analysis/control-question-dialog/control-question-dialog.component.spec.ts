import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlQuestionDialogComponent } from './control-question-dialog.component';

describe('ControlQuestionDialogComponent', () => {
  let component: ControlQuestionDialogComponent;
  let fixture: ComponentFixture<ControlQuestionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlQuestionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
