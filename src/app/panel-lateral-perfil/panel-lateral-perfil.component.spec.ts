import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLateralPerfilComponent } from './panel-lateral-perfil.component';

describe('PanelLateralPerfilComponent', () => {
  let component: PanelLateralPerfilComponent;
  let fixture: ComponentFixture<PanelLateralPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLateralPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLateralPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
