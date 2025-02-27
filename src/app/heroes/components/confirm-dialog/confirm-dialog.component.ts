import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './confirm-dialog.component.html',
  styles: ``
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero) { 
      
    }

    onNoClick(): void {
      this.dialogRef.close(false);
    }

    onConfirm(): void {
      this.dialogRef.close(true);
    }

}
