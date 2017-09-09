import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemDialog } from './equipment-item-dialog.component';

describe('ItemDialogComponent', () => {
  let component: EquipmentItemDialog;
  let fixture: ComponentFixture<EquipmentItemDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentItemDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentItemDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
