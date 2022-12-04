import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltrustComponent } from './fulltrust.component';

describe('FulltrustComponent', () => {
  let component: FulltrustComponent;
  let fixture: ComponentFixture<FulltrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulltrustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
