import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuLastminuteComponent } from './cpu-lastminute.component';

describe('CpuLastminuteComponent', () => {
  let component: CpuLastminuteComponent;
  let fixture: ComponentFixture<CpuLastminuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLastminuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuLastminuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
