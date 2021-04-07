import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCredentialsComponent } from './login-with-credentials.component';

describe('LoginWithCredentialsComponent', () => {
  let component: LoginWithCredentialsComponent;
  let fixture: ComponentFixture<LoginWithCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
