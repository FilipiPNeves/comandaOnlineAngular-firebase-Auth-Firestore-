import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinalizarComandaComponent } from './dialog-finalizar-comanda.component';

describe('DialogFinalizarComandaComponent', () => {
  let component: DialogFinalizarComandaComponent;
  let fixture: ComponentFixture<DialogFinalizarComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFinalizarComandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFinalizarComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
