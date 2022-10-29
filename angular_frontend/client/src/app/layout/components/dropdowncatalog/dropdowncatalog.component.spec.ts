import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowncatalogComponent } from './dropdowncatalog.component';

describe('DropdowncatalogComponent', () => {
  let component: DropdowncatalogComponent;
  let fixture: ComponentFixture<DropdowncatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowncatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowncatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
