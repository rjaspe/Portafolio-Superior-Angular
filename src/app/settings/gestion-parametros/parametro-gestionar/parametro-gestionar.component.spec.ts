import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroGestionarComponent } from './parametro-gestionar.component';

describe('ParametroGestionarComponent', () => {
  let component: ParametroGestionarComponent;
  let fixture: ComponentFixture<ParametroGestionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroGestionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
