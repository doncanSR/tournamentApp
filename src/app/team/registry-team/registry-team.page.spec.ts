import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryTeamPage } from './registry-team.page';

describe('RegistryTeamPage', () => {
  let component: RegistryTeamPage;
  let fixture: ComponentFixture<RegistryTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryTeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
