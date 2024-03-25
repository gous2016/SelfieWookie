import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WookieService {


  constructor(private httpClient : HttpClient) { }

  getSelfie() : Selfie[] {

    const tableau: Selfie[] = [];

    let selfie = new Selfie();
    selfie.image = '';
    selfie.wookie = new Wookie();
    selfie.wookie.nom = 'Chewie';

    tableau.push(selfie);

    tableau.push({
      id : 1,
      image : 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/wookies-main.jpeg',
      imageAs64 : '',
      titre : 'photo de ouf',
       wookie: {
        nom: 'Turloff',
        selfies:[]
       }
    });


    return tableau;
  }

  /**
   * retourne un seul selfie avec son wookie
   *
   * @param id
   * @returns
   */
  getOne(id:number) : Observable<Selfie>{
    return this.httpClient.get<Selfie>(environment.apis.selfies.url + '/' + id);
  }

  /**
   * Retourne une observable pour s'incrire à la réception des tableaux de wookies
   */

  getAllSelfie(): Observable<Selfie[]> {
    return this.httpClient.get<Selfie []>(environment.apis.selfies.url);
  }

  /**
   * ajout d'un selfie :  envoie des données en json vers l'api
   * et récupération du selfie ajouté
   * @param selfie
   * @returns
   */
  ajouter(selfie : Selfie) : Observable<Selfie> {
    return this.httpClient.post<Selfie>(environment.apis.selfies.url, selfie);
  }


}
