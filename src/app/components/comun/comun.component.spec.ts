import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunComponent } from './comun.component';

describe('ComunComponent', () => {
  let component: ComunComponent;
  let fixture: ComponentFixture<ComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
