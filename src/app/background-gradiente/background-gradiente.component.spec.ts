import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGradienteComponent } from './background-gradiente.component';

describe('BackgroundGradienteComponent', () => {
  let component: BackgroundGradienteComponent;
  let fixture: ComponentFixture<BackgroundGradienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundGradienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundGradienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
