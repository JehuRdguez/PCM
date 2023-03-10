import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivosFormComponent } from './preventivos-form.component';

describe('PreventivosFormComponent', () => {
  let component: PreventivosFormComponent;
  let fixture: ComponentFixture<PreventivosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventivosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventivosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
