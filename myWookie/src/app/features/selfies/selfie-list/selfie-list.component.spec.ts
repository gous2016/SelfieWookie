import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieListComponent } from './selfie-list.component';

describe('SelfieListComponent', () => {
  let component: SelfieListComponent;
  let fixture: ComponentFixture<SelfieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
