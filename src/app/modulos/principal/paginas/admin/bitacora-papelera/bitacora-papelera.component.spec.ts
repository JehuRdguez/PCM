import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraPapeleraComponent } from './bitacora-papelera.component';

describe('BitacoraPapeleraComponent', () => {
  let component: BitacoraPapeleraComponent;
  let fixture: ComponentFixture<BitacoraPapeleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraPapeleraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraPapeleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
