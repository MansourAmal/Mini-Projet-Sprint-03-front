import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTheatreComponent } from './mon-theatre.component';

describe('MonTheatreComponent', () => {
  let component: MonTheatreComponent;
  let fixture: ComponentFixture<MonTheatreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonTheatreComponent]
    });
    fixture = TestBed.createComponent(MonTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
