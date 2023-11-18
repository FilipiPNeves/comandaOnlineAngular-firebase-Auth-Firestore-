import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoOpcoesComponent } from './dialog-novo-opcoes.component';

describe('DialogNovoOpcoesComponent', () => {
  let component: DialogNovoOpcoesComponent;
  let fixture: ComponentFixture<DialogNovoOpcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoOpcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovoOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
