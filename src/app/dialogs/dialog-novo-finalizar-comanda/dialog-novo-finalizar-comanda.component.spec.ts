import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoFinalizarComandaComponent } from './dialog-novo-finalizar-comanda.component';

describe('DialogNovoFinalizarComandaComponent', () => {
  let component: DialogNovoFinalizarComandaComponent;
  let fixture: ComponentFixture<DialogNovoFinalizarComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoFinalizarComandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovoFinalizarComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
