import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarUsuarioComponent } from './administrar-usuario.component';

describe('AdministrarUsuarioComponent', () => {
  let component: AdministrarUsuarioComponent;
  let fixture: ComponentFixture<AdministrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
