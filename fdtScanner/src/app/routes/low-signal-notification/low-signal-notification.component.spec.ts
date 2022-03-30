import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowSignalNotificationComponent } from './low-signal-notification.component';

describe('LowSignalNotificationComponent', () => {
  let component: LowSignalNotificationComponent;
  let fixture: ComponentFixture<LowSignalNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowSignalNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowSignalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
