import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaRotaPortoComponent } from './segunda-rota-porto.component';

describe('SegundaRotaPortoComponent', () => {
  let component: SegundaRotaPortoComponent;
  let fixture: ComponentFixture<SegundaRotaPortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaRotaPortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaRotaPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
