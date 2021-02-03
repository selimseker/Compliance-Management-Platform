import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuditorHomeComponent } from './create-auditor-home.component';

describe('CreateAuditorHomeComponent', () => {
  let component: CreateAuditorHomeComponent;
  let fixture: ComponentFixture<CreateAuditorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAuditorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuditorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
