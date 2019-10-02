import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraRotaBragaComponent } from './primeira-rota-braga.component';

describe('PrimeiraRotaBragaComponent', () => {
  let component: PrimeiraRotaBragaComponent;
  let fixture: ComponentFixture<PrimeiraRotaBragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraRotaBragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraRotaBragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
