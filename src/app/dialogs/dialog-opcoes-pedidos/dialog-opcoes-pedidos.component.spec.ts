import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpcoesPedidosComponent } from './dialog-opcoes-pedidos.component';

describe('DialogOpcoesPedidosComponent', () => {
  let component: DialogOpcoesPedidosComponent;
  let fixture: ComponentFixture<DialogOpcoesPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpcoesPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpcoesPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
