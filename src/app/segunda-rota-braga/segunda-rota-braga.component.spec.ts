import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaRotaBragaComponent } from './segunda-rota-braga.component';

describe('SegundaRotaBragaComponent', () => {
  let component: SegundaRotaBragaComponent;
  let fixture: ComponentFixture<SegundaRotaBragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaRotaBragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaRotaBragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
