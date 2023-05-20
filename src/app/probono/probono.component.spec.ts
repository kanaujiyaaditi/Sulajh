import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbonoComponent } from './probono.component';

describe('ProbonoComponent', () => {
  let component: ProbonoComponent;
  let fixture: ComponentFixture<ProbonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
