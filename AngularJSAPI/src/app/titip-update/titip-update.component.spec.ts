import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitipUpdateComponent } from './titip-update.component';

describe('TitipUpdateComponent', () => {
  let component: TitipUpdateComponent;
  let fixture: ComponentFixture<TitipUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitipUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitipUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
