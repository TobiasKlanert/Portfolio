import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackGroup } from './stack-group';

describe('StackGroup', () => {
  let component: StackGroup;
  let fixture: ComponentFixture<StackGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(StackGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
