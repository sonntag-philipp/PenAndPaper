import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-simple-input-dialog',
  templateUrl: './simple-input-dialog.component.html',
  styleUrls: ['./simple-input-dialog.component.css']
})
export class SimpleInputDialog {

  constructor(
    public dialogRef: MdDialogRef<any>, 
    @Inject(MD_DIALOG_DATA) public data: any
  ) { 

  }

  private onBtnClose(): void {
    this.dialogRef.close(this.data);
  }
  
  private getType(item: any): string {
    if(item.type === null) return "text";
    else return item.type;
  }
}