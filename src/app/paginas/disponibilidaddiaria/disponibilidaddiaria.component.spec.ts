import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidaddiariaComponent } from './disponibilidaddiaria.component';

describe('DisponibilidaddiariaComponent', () => {
  let component: DisponibilidaddiariaComponent;
  let fixture: ComponentFixture<DisponibilidaddiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidaddiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilidaddiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
