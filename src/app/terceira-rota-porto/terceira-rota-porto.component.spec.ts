import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraRotaPortoComponent } from './terceira-rota-porto.component';

describe('TerceiraRotaPortoComponent', () => {
  let component: TerceiraRotaPortoComponent;
  let fixture: ComponentFixture<TerceiraRotaPortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraRotaPortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraRotaPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
