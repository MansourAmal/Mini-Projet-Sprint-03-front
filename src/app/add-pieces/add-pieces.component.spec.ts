import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPiecesComponent } from './add-pieces.component';

describe('AddPiecesComponent', () => {
  let component: AddPiecesComponent;
  let fixture: ComponentFixture<AddPiecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPiecesComponent]
    });
    fixture = TestBed.createComponent(AddPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
