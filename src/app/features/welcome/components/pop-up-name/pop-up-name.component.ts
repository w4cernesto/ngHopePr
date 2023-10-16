import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-name',
  templateUrl: './pop-up-name.component.html',
  styleUrls: ['./pop-up-name.component.css']
})
export class PopUpNameComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopUpNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.data = {
      name: ""
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
