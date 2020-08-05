import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWaterbillComponent } from './generate-waterbill.component';

describe('GenerateWaterbillComponent', () => {
  let component: GenerateWaterbillComponent;
  let fixture: ComponentFixture<GenerateWaterbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateWaterbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWaterbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
