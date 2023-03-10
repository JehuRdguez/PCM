import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerFormComponent } from './manpower-form.component';

describe('ManpowerFormComponent', () => {
  let component: ManpowerFormComponent;
  let fixture: ComponentFixture<ManpowerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpowerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManpowerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
