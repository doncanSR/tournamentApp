import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTournamentPage } from './new-tournament.page';

describe('NewTournamentPage', () => {
  let component: NewTournamentPage;
  let fixture: ComponentFixture<NewTournamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTournamentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
