import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeloComponent } from './cabelo.component';

describe('CabeloComponent', () => {
  let component: CabeloComponent;
  let fixture: ComponentFixture<CabeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
