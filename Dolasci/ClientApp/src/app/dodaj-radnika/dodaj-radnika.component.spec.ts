import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajRadnikaComponent } from './dodaj-radnika.component';

describe('DodajRadnikaComponent', () => {
  let component: DodajRadnikaComponent;
  let fixture: ComponentFixture<DodajRadnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajRadnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajRadnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
