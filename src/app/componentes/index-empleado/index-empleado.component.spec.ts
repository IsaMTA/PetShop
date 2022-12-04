import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmpleadoComponent } from './index-empleado.component';

describe('IndexEmpleadoComponent', () => {
  let component: IndexEmpleadoComponent;
  let fixture: ComponentFixture<IndexEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
