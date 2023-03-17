import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoghoroRegistrarComponent } from './dialoghoro-registrar.component';

describe('DialoghoroRegistrarComponent', () => {
  let component: DialoghoroRegistrarComponent;
  let fixture: ComponentFixture<DialoghoroRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoghoroRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoghoroRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
