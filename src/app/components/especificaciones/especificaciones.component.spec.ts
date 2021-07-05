import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionesComponent } from './especificaciones.component';

describe('EspecificacionesComponent', () => {
  let component: EspecificacionesComponent;
  let fixture: ComponentFixture<EspecificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
