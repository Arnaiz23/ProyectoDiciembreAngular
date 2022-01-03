import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionesUsuarioComponent } from './direcciones-usuario.component';

describe('DireccionesUsuarioComponent', () => {
  let component: DireccionesUsuarioComponent;
  let fixture: ComponentFixture<DireccionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
