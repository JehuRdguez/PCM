import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoghoroDetallesComponent } from './dialoghoro-detalles.component';

describe('DialoghoroDetallesComponent', () => {
  let component: DialoghoroDetallesComponent;
  let fixture: ComponentFixture<DialoghoroDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoghoroDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoghoroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
