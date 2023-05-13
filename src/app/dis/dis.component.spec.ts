import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisComponent } from './dis.component';

describe('DisComponent', () => {
  let component: DisComponent;
  let fixture: ComponentFixture<DisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
