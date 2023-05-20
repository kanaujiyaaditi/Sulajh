import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialPadButtonComponent } from './dial-pad-button.component';

describe('DialPadButtonComponent', () => {
  let component: DialPadButtonComponent;
  let fixture: ComponentFixture<DialPadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialPadButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialPadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
