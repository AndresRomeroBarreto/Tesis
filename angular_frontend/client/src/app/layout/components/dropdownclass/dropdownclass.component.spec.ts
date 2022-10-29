import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownclassComponent } from './dropdownclass.component';

describe('DropdownclassComponent', () => {
  let component: DropdownclassComponent;
  let fixture: ComponentFixture<DropdownclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
