import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraRotaBragaComponent } from './terceira-rota-braga.component';

describe('TerceiraRotaBragaComponent', () => {
  let component: TerceiraRotaBragaComponent;
  let fixture: ComponentFixture<TerceiraRotaBragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraRotaBragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraRotaBragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
