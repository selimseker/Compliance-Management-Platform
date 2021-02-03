import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GapAnalysisHomeComponent } from './gap-analysis-home.component';

describe('GapAnalysisHomeComponent', () => {
  let component: GapAnalysisHomeComponent;
  let fixture: ComponentFixture<GapAnalysisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GapAnalysisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GapAnalysisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
