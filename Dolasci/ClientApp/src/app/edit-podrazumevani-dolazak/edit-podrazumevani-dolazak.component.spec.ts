import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPodrazumevaniDolazakComponent } from './edit-podrazumevani-dolazak.component';

describe('EditPodrazumevaniDolazakComponent', () => {
  let component: EditPodrazumevaniDolazakComponent;
  let fixture: ComponentFixture<EditPodrazumevaniDolazakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPodrazumevaniDolazakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPodrazumevaniDolazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
