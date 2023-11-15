import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCaixaSvtotComponent } from './pedidos-caixa-svtot.component';

describe('PedidosCaixaSvtotComponent', () => {
  let component: PedidosCaixaSvtotComponent;
  let fixture: ComponentFixture<PedidosCaixaSvtotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCaixaSvtotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosCaixaSvtotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
