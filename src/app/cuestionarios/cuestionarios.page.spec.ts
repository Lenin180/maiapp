import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuestionariosPage } from './cuestionarios.page';

describe('CuestionariosPage', () => {
  let component: CuestionariosPage;
  let fixture: ComponentFixture<CuestionariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuestionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
