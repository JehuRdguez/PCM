import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerDetallesComponent } from './manpower-detalles.component';

describe('ManpowerDetallesComponent', () => {
  let component: ManpowerDetallesComponent;
  let fixture: ComponentFixture<ManpowerDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpowerDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManpowerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
