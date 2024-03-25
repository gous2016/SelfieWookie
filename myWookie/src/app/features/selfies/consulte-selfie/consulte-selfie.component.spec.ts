import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteSelfieComponent } from './consulte-selfie.component';

describe('ConsulteSelfieComponent', () => {
  let component: ConsulteSelfieComponent;
  let fixture: ComponentFixture<ConsulteSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulteSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulteSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
