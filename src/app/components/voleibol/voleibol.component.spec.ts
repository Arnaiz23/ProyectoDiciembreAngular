import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleibolComponent } from './voleibol.component';

describe('VoleibolComponent', () => {
  let component: VoleibolComponent;
  let fixture: ComponentFixture<VoleibolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleibolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoleibolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
