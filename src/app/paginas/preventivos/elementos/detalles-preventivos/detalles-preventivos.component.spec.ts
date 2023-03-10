import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPreventivosComponent } from './detalles-preventivos.component';

describe('DetallesPreventivosComponent', () => {
  let component: DetallesPreventivosComponent;
  let fixture: ComponentFixture<DetallesPreventivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPreventivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPreventivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
