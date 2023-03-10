import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBitacoraComponent } from './detalles-bitacora.component';

describe('DetallesBitacoraComponent', () => {
  let component: DetallesBitacoraComponent;
  let fixture: ComponentFixture<DetallesBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesBitacoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
