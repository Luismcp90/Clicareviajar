import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BragaComponent } from './braga.component';

describe('BragaComponent', () => {
  let component: BragaComponent;
  let fixture: ComponentFixture<BragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
