import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPedidoSvtotComponent } from './novo-pedido-svtot.component';

describe('NovoPedidoSvtotComponent', () => {
  let component: NovoPedidoSvtotComponent;
  let fixture: ComponentFixture<NovoPedidoSvtotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPedidoSvtotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPedidoSvtotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
