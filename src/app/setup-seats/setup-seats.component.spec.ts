import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSeatsComponent } from './setup-seats.component';

describe('SetupSeatsComponent', () => {
  let component: SetupSeatsComponent;
  let fixture: ComponentFixture<SetupSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
