import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuLasthourComponent } from './cpu-lasthour.component';

describe('CpuLasthourComponent', () => {
  let component: CpuLasthourComponent;
  let fixture: ComponentFixture<CpuLasthourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuLasthourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuLasthourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
