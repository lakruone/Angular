import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseRoleComponent } from './nurse-role.component';

describe('NurseRoleComponent', () => {
  let component: NurseRoleComponent;
  let fixture: ComponentFixture<NurseRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
