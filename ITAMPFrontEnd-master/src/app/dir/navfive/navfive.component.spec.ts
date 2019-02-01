import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfiveComponent } from './navfive.component';

describe('NavfiveComponent', () => {
  let component: NavfiveComponent;
  let fixture: ComponentFixture<NavfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
