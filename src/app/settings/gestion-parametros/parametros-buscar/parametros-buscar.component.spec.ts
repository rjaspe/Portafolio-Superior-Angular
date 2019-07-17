import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosBuscarComponent } from './parametros-buscar.component';

describe('ParametrosBuscarComponent', () => {
  let component: ParametrosBuscarComponent;
  let fixture: ComponentFixture<ParametrosBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
