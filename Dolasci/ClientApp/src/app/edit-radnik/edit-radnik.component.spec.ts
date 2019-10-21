import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadnikComponent } from './edit-radnik.component';

describe('EditRadnikComponent', () => {
  let component: EditRadnikComponent;
  let fixture: ComponentFixture<EditRadnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRadnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
