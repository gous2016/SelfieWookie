import { Subscription, switchMap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Selfie } from 'src/app/models/selfie';
import { WookieService } from 'src/app/shared/services/wookie.service';

@Component({
  selector: 'app-consulte-selfie',
  templateUrl: './consulte-selfie.component.html',
  styleUrls: ['./consulte-selfie.component.css']
})
export class ConsulteSelfieComponent  implements OnInit, OnDestroy{

  private subscriptions : Subscription[] = [];
  private _lesSelfies !: Selfie;


 constructor(private route : ActivatedRoute,
             private wookieService : WookieService){}


  ngOnInit(): void {
     const subscription =  this.route.params.subscribe(params => {
        const selfieId = params['id'];
      this.wookieService.getOne(selfieId).subscribe(selfie => this._lesSelfies = selfie);

    });
    // const subscription = this.route.params.pipe(
    //   switchMap(params => {
    //     const selfieId = params['id'];
    //     return this.wookieService.getOne(selfieId);
    //   })
    // ).subscribe(item => this._lesSelfies = item);

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe);
  }

}
