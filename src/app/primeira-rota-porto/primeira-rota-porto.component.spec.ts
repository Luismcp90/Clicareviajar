import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraRotaPortoComponent } from './primeira-rota-porto.component';

describe('PrimeiraRotaPortoComponent', () => {
  let component: PrimeiraRotaPortoComponent;
  let fixture: ComponentFixture<PrimeiraRotaPortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraRotaPortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraRotaPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
