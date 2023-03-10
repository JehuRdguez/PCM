import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSemanalesComponent } from './detalles-semanales.component';

describe('DetallesSemanalesComponent', () => {
  let component: DetallesSemanalesComponent;
  let fixture: ComponentFixture<DetallesSemanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSemanalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesSemanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
