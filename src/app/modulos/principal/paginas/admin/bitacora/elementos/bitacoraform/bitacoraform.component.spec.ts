import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraformComponent } from './bitacoraform.component';

describe('BitacoraformComponent', () => {
  let component: BitacoraformComponent;
  let fixture: ComponentFixture<BitacoraformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
