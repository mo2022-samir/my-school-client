import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass'],
})
export class SnackbarComponent {
  breadscrums = [
    {
      title: 'Snackbar',
      items: ['UI'],
      active: 'Snackbar',
    },
  ];

  constructor(private snackBar: MatSnackBar) {}
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
