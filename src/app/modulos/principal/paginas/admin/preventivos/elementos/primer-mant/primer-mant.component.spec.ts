import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerMantComponent } from './primer-mant.component';

describe('PrimerMantComponent', () => {
  let component: PrimerMantComponent;
  let fixture: ComponentFixture<PrimerMantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerMantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerMantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
