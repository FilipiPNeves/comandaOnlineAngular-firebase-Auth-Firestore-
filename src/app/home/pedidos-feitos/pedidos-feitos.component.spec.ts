import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosFeitosComponent } from './pedidos-feitos.component';

describe('PedidosFeitosComponent', () => {
  let component: PedidosFeitosComponent;
  let fixture: ComponentFixture<PedidosFeitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosFeitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosFeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
