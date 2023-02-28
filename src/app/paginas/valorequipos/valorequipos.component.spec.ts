import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorequiposComponent } from './valorequipos.component';

describe('ValorequiposComponent', () => {
  let component: ValorequiposComponent;
  let fixture: ComponentFixture<ValorequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorequiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
