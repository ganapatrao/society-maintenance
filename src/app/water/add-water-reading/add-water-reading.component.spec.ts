import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaterReadingComponent } from './add-water-reading.component';

describe('AddWaterReadingComponent', () => {
  let component: AddWaterReadingComponent;
  let fixture: ComponentFixture<AddWaterReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWaterReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWaterReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
