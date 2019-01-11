import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryGamePage } from './registry-game.page';

describe('RegistryGamePage', () => {
  let component: RegistryGamePage;
  let fixture: ComponentFixture<RegistryGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
