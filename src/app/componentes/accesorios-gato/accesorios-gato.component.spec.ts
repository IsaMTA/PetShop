import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosGatoComponent } from './accesorios-gato.component';

describe('AccesoriosGatoComponent', () => {
  let component: AccesoriosGatoComponent;
  let fixture: ComponentFixture<AccesoriosGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriosGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
