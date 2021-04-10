import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleComponent } from './pele.component';

describe('PeleComponent', () => {
  let component: PeleComponent;
  let fixture: ComponentFixture<PeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
