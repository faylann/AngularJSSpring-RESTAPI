import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitipListComponent } from './titip-list.component';

describe('TitipListComponent', () => {
  let component: TitipListComponent;
  let fixture: ComponentFixture<TitipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
