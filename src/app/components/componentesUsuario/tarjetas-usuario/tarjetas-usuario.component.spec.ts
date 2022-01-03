import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasUsuarioComponent } from './tarjetas-usuario.component';

describe('TarjetasUsuarioComponent', () => {
  let component: TarjetasUsuarioComponent;
  let fixture: ComponentFixture<TarjetasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
