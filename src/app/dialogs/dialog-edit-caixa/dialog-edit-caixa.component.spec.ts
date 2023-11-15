import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCaixaComponent } from './dialog-edit-caixa.component';

describe('DialogEditCaixaComponent', () => {
  let component: DialogEditCaixaComponent;
  let fixture: ComponentFixture<DialogEditCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditCaixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
