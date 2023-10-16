import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PopUpNameComponent } from '../../components/pop-up-name/pop-up-name.component';


@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  name: string = "";

  ngOnInit(): void {
  }

  openPopUpName(): void {
    const dialogRef = this.dialog.open(PopUpNameComponent, {
      width: 'auto',
      height:'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    this.name = result;    });
  }

}
