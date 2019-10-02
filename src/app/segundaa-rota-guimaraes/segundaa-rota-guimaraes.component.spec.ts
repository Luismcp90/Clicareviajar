import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaaRotaGuimaraesComponent } from './segundaa-rota-guimaraes.component';

describe('SegundaaRotaGuimaraesComponent', () => {
  let component: SegundaaRotaGuimaraesComponent;
  let fixture: ComponentFixture<SegundaaRotaGuimaraesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaaRotaGuimaraesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaaRotaGuimaraesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
