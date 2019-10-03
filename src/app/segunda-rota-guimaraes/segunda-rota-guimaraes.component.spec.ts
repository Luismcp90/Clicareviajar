import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundaRotaGuimaraesComponent } from './segunda-rota-guimaraes.component';

describe('SegundaRotaGuimaraesComponent', () => {
  let component: SegundaRotaGuimaraesComponent;
  let fixture: ComponentFixture<SegundaRotaGuimaraesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaRotaGuimaraesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaRotaGuimaraesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
