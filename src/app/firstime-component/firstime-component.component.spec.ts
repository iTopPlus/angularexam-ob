import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstimeComponentComponent } from './firstime-component.component';

describe('FirstimeComponentComponent', () => {
  let component: FirstimeComponentComponent;
  let fixture: ComponentFixture<FirstimeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstimeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
