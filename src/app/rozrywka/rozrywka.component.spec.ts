import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RozrywkaComponent } from './rozrywka.component';

describe('RozrywkaComponent', () => {
  let component: RozrywkaComponent;
  let fixture: ComponentFixture<RozrywkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RozrywkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RozrywkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
