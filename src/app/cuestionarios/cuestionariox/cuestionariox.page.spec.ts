import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuestionarioxPage } from './cuestionariox.page';

describe('CuestionarioxPage', () => {
  let component: CuestionarioxPage;
  let fixture: ComponentFixture<CuestionarioxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuestionarioxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
