import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css']
})
export class UnSelfieReadonlyComponent {

  @Input()
  public unSelfie !: Selfie;

  constructor(private _router: Router){ }

  ngOnInit() {

  }

  clickPourDuel(){
     this._router.navigate(['/duels/nouveau']);
  }

  clickPourConsulter(){
    this.unSelfie.id = 1;
    this._router.navigate(['/selfie/consulter', this.unSelfie.id]);
  }
}
