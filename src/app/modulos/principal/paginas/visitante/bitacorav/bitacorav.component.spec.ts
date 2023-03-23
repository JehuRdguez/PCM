import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoravComponent } from './bitacorav.component';

describe('BitacoravComponent', () => {
  let component: BitacoravComponent;
  let fixture: ComponentFixture<BitacoravComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoravComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
