import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoghoroEditarComponent } from './dialoghoro-editar.component';

describe('DialoghoroEditarComponent', () => {
  let component: DialoghoroEditarComponent;
  let fixture: ComponentFixture<DialoghoroEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoghoroEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoghoroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
