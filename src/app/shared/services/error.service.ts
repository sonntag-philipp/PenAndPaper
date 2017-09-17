import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ErrorService {

  constructor(
    private snackBar: MdSnackBar
  ) { }

  public showSnackbar(status: number) {
    switch (status) {
      case 404:
          this.snackBar.open("Konnte nicht gefunden werden.", "Okay", {
            duration: 3000
          });
        break;
      case 403:
          this.snackBar.open("Existiert bereits.", "Okay", {
            duration: 3000
          });
        break;
      case 500:
          this.snackBar.open("Im Server ist ein unerwarteter Fehler aufgetreten.", "Okay", {
            duration: 3000
          });
        break;
      case 501:
          this.snackBar.open("Der Server unterstützt diese Funktion noch nicht.", "Okay", {
            duration: 3000
          });
        break;
      case 503:
          this.snackBar.open("Die Datenbank ist nicht erreichbar.", "Okay", {
            duration: 3000
          });
        break;
      default:
        this.snackBar.open("Es ist ein unbekannter Fehler aufgetreten.", "Okay", {
          duration: 3000
        });
        break;
    }
  }
}