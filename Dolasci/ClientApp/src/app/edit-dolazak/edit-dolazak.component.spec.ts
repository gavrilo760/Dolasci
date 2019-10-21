import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDolazakComponent } from './edit-dolazak.component';

describe('EditDolazakComponent', () => {
  let component: EditDolazakComponent;
  let fixture: ComponentFixture<EditDolazakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDolazakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDolazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
