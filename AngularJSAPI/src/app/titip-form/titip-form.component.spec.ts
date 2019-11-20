import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitipFormComponent } from './titip-form.component';

describe('TitipFormComponent', () => {
  let component: TitipFormComponent;
  let fixture: ComponentFixture<TitipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
