import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab5Page } from './Tab5Page';

describe('Tab5Page', () => {
  let component: Tab5Page;
  let fixture: ComponentFixture<Tab5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
