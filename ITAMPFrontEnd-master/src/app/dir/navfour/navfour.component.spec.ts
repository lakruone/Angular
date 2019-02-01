import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfourComponent } from './navfour.component';

describe('NavfourComponent', () => {
  let component: NavfourComponent;
  let fixture: ComponentFixture<NavfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
