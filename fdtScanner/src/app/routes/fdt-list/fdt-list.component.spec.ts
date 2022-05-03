import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdtListComponent } from './fdt-list.component';

describe('FdtListComponent', () => {
  let component: FdtListComponent;
  let fixture: ComponentFixture<FdtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
