import { Component} from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {

  constructor(public dialogRef: MdDialogRef<RegisterDialogComponent>) { }

  registerUser(){

  }
}
