import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanalesFormComponent } from './semanales-form.component';

describe('SemanalesFormComponent', () => {
  let component: SemanalesFormComponent;
  let fixture: ComponentFixture<SemanalesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanalesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
