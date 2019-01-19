import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefereePage } from './add-referee.page';

describe('AddRefereePage', () => {
  let component: AddRefereePage;
  let fixture: ComponentFixture<AddRefereePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRefereePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefereePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
