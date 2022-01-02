import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaloncestoComponent } from './baloncesto.component';

describe('BaloncestoComponent', () => {
  let component: BaloncestoComponent;
  let fixture: ComponentFixture<BaloncestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaloncestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaloncestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
