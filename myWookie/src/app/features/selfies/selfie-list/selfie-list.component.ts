import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { WookieService } from 'src/app/shared/services/wookie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy{

   public selfieAAjouter : Selfie | null = null;

  _lesSouscriptions: Subscription[] = [];

  lesSelfies : Selfie[] = [];

    @Input()
     set filtre(valeur : string){

     }

    constructor(private wookieService : WookieService){}

    ngOnInit() {
      //this.lesSelfies = this.wookieService.getSelfie();

     const subscriptionEnCours = this.wookieService.getAllSelfie().subscribe(unTableau => this.lesSelfies = unTableau);
     this._lesSouscriptions.push(subscriptionEnCours);
    }

    ngOnDestroy(): void {
      this._lesSouscriptions.forEach(item => item.unsubscribe());
    }

    demandeAjoutSelfie() : void{
      this.selfieAAjouter = new Selfie();
      // this.selfieAAjouter.titre = 'Test 01';

    }

    cacheZoneAjoutSelfie() : void{
      this.selfieAAjouter = null;
    }

}
