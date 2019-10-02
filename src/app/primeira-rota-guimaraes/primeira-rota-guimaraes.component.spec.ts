import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraRotaGuimaraesComponent } from './primeira-rota-guimaraes.component';

describe('PrimeiraRotaGuimaraesComponent', () => {
  let component: PrimeiraRotaGuimaraesComponent;
  let fixture: ComponentFixture<PrimeiraRotaGuimaraesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraRotaGuimaraesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraRotaGuimaraesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
