import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPedidoDiferenteComponent } from './dialog-pedido-diferente.component';

describe('DialogPedidoDiferenteComponent', () => {
  let component: DialogPedidoDiferenteComponent;
  let fixture: ComponentFixture<DialogPedidoDiferenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPedidoDiferenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPedidoDiferenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
