import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPedidosComponent } from './dialog-edit-pedidos.component';

describe('DialogEditPedidosComponent', () => {
  let component: DialogEditPedidosComponent;
  let fixture: ComponentFixture<DialogEditPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
