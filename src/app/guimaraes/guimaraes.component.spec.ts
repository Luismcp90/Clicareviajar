import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuimaraesComponent } from './guimaraes.component';

describe('GuimaraesComponent', () => {
  let component: GuimaraesComponent;
  let fixture: ComponentFixture<GuimaraesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuimaraesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuimaraesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
