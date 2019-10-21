import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajDolaskeComponent } from './dodaj-dolaske.component';

describe('DodajDolaskeComponent', () => {
  let component: DodajDolaskeComponent;
  let fixture: ComponentFixture<DodajDolaskeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajDolaskeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajDolaskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
