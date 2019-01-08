import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSamplePage } from './database-sample.page';

describe('DatabaseSamplePage', () => {
  let component: DatabaseSamplePage;
  let fixture: ComponentFixture<DatabaseSamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
