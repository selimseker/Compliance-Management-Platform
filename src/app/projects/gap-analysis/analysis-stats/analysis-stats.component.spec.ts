import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisStatsComponent } from './analysis-stats.component';

describe('AnalysisStatsComponent', () => {
  let component: AnalysisStatsComponent;
  let fixture: ComponentFixture<AnalysisStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
