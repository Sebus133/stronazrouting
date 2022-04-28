import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatrComponent } from './teatr.component';

describe('TeatrComponent', () => {
  let component: TeatrComponent;
  let fixture: ComponentFixture<TeatrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeatrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
