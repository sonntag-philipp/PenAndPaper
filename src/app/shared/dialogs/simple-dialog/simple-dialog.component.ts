import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.css']
})
export class SimpleDialog {

  constructor(
    public dialogRef: MdDialogRef<any>, 
    @Inject(MD_DIALOG_DATA) public data: any
  ) { 

  }

  public onBtnClick(item: any) {
    item.value = true;
    this.dialogRef.close(this.data);
  }
  
  private getType(item: any): string {
    if(item.type === null) return "text";
    else return item.type;
  }
}