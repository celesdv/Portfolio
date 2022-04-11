import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExComponent } from './accordion-ex.component';

describe('AccordionExComponent', () => {
  let component: AccordionExComponent;
  let fixture: ComponentFixture<AccordionExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
