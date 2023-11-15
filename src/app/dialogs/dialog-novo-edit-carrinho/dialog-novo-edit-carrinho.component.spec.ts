import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoEditCarrinhoComponent } from './dialog-novo-edit-carrinho.component';

describe('DialogNovoEditCarrinhoComponent', () => {
  let component: DialogNovoEditCarrinhoComponent;
  let fixture: ComponentFixture<DialogNovoEditCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoEditCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovoEditCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
