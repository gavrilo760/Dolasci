import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolasciComponent } from './dolasci.component';

describe('DolasciComponent', () => {
  let component: DolasciComponent;
  let fixture: ComponentFixture<DolasciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolasciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolasciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
