import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorPage } from './modal-error.page';

describe('ModalErrorPage', () => {
  let component: ModalErrorPage;
  let fixture: ComponentFixture<ModalErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalErrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
