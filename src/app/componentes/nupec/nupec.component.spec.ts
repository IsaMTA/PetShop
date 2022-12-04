import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NupecComponent } from './nupec.component';

describe('NupecComponent', () => {
  let component: NupecComponent;
  let fixture: ComponentFixture<NupecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NupecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NupecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
