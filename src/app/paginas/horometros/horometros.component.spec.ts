import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorometrosComponent } from './horometros.component';

describe('HorometrosComponent', () => {
  let component: HorometrosComponent;
  let fixture: ComponentFixture<HorometrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorometrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorometrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
