import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNav } from './dot-nav';

describe('DotNav', () => {
  let component: DotNav;
  let fixture: ComponentFixture<DotNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotNav],
    }).compileComponents();

    fixture = TestBed.createComponent(DotNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
