import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanalesComponent } from './semanales.component';

describe('SemanalesComponent', () => {
  let component: SemanalesComponent;
  let fixture: ComponentFixture<SemanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
