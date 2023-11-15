import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCarrinhoComponent } from './dialog-edit-carrinho.component';

describe('DialogEditCarrinhoComponent', () => {
  let component: DialogEditCarrinhoComponent;
  let fixture: ComponentFixture<DialogEditCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
