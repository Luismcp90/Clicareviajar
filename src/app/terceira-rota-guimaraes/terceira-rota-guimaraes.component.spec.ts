import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraRotaGuimaraesComponent } from './terceira-rota-guimaraes.component';

describe('TerceiraRotaGuimaraesComponent', () => {
  let component: TerceiraRotaGuimaraesComponent;
  let fixture: ComponentFixture<TerceiraRotaGuimaraesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraRotaGuimaraesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraRotaGuimaraesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
