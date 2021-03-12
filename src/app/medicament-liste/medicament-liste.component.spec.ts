import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentListeComponent } from './medicament-liste.component';

describe('MedicamentListeComponent', () => {
  let component: MedicamentListeComponent;
  let fixture: ComponentFixture<MedicamentListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
