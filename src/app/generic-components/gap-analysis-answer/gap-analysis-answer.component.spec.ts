import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GapAnalysisAnswerComponent } from './gap-analysis-answer.component';

describe('GapAnalysisAnswerComponent', () => {
  let component: GapAnalysisAnswerComponent;
  let fixture: ComponentFixture<GapAnalysisAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GapAnalysisAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GapAnalysisAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
