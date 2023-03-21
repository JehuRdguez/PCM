import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraFormComponent } from './bitacoraform.component';

describe('BitacoraFormComponent', () => {
  let component: BitacoraFormComponent;
  let fixture: ComponentFixture<BitacoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
