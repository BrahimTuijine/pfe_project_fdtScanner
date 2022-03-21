import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdtPlacesComponent } from './fdt-places.component';

describe('FdtPlacesComponent', () => {
  let component: FdtPlacesComponent;
  let fixture: ComponentFixture<FdtPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdtPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdtPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
