import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBebidasComponent } from './dialog-edit-bebidas.component';

describe('DialogEditBebidasComponent', () => {
  let component: DialogEditBebidasComponent;
  let fixture: ComponentFixture<DialogEditBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
