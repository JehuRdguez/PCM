import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoradetallesComponent } from './bitacoradetalles.component';

describe('BitacoradetallesComponent', () => {
  let component: BitacoradetallesComponent;
  let fixture: ComponentFixture<BitacoradetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoradetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoradetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
