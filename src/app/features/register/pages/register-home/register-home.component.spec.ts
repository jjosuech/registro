import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHomeComponent } from './register-home.component';

describe('RegisterHomeComponent', () => {
  let component: RegisterHomeComponent;
  let fixture: ComponentFixture<RegisterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
