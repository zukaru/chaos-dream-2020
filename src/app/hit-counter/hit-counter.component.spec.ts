import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitCounterComponent } from './hit-counter.component';

describe('HitCounterComponent', () => {
  let component: HitCounterComponent;
  let fixture: ComponentFixture<HitCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
