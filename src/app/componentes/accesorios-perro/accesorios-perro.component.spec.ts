import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosPerroComponent } from './accesorios-perro.component';

describe('AccesoriosPerroComponent', () => {
  let component: AccesoriosPerroComponent;
  let fixture: ComponentFixture<AccesoriosPerroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriosPerroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
