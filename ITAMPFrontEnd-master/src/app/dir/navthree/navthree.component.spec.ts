import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavthreeComponent } from './navthree.component';

describe('NavthreeComponent', () => {
  let component: NavthreeComponent;
  let fixture: ComponentFixture<NavthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
