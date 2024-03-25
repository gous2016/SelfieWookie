import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Selfie à wookie';

 valeurARecherche = '';

 constructor(private loggerService : LoggerService){

 }

 rechercherSelfies(valeur : string){
  this.loggerService.log('AppComponent', valeur);
  this.valeurARecherche = valeur;
 }


}
