import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogedinComponent } from './navbar-logedin.component';

describe('NavbarLogedinComponent', () => {
  let component: NavbarLogedinComponent;
  let fixture: ComponentFixture<NavbarLogedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLogedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLogedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
