import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LUDOComponent } from './ludo.component';

describe('LUDOComponent', () => {
  let component: LUDOComponent;
  let fixture: ComponentFixture<LUDOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LUDOComponent]
    });
    fixture = TestBed.createComponent(LUDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
