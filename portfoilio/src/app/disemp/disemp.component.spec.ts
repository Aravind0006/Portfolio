import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisempComponent } from './disemp.component';

describe('DisempComponent', () => {
  let component: DisempComponent;
  let fixture: ComponentFixture<DisempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
