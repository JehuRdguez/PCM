import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogagregarequipoComponent } from './dialogagregarequipo.component';

describe('DialogagregarequipoComponent', () => {
  let component: DialogagregarequipoComponent;
  let fixture: ComponentFixture<DialogagregarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogagregarequipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogagregarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
