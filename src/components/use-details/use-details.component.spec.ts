import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDetailsComponent } from './use-details.component';

describe('UseDetailsComponent', () => {
  let component: UseDetailsComponent;
  let fixture: ComponentFixture<UseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
