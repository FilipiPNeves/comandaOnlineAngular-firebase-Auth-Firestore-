import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePedidosComponent } from './lista-de-pedidos.component';

describe('ListaDePedidosComponent', () => {
  let component: ListaDePedidosComponent;
  let fixture: ComponentFixture<ListaDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
