import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerPage } from './add-manager.page';

describe('AddManagerPage', () => {
  let component: AddManagerPage;
  let fixture: ComponentFixture<AddManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
