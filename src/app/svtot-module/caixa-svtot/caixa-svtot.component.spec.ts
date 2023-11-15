import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaSvtotComponent } from './caixa-svtot.component';

describe('CaixaSvtotComponent', () => {
  let component: CaixaSvtotComponent;
  let fixture: ComponentFixture<CaixaSvtotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaSvtotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaSvtotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
