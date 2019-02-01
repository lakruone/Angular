import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtwoComponent } from './navtwo.component';

describe('NavtwoComponent', () => {
  let component: NavtwoComponent;
  let fixture: ComponentFixture<NavtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
