import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasAdminComponent } from './preguntas-admin.component';

describe('PreguntasAdminComponent', () => {
  let component: PreguntasAdminComponent;
  let fixture: ComponentFixture<PreguntasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
