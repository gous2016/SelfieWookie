import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { WookieService } from 'src/app/shared/services/wookie.service';

import {WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

import {Observable, Subject} from 'rxjs';


@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent  implements OnInit{

  public deviceId !: string;
  public facingMode: string = 'environment';
  public messages: any[] = [];

  showCamera: boolean = false;
  photoPrise: boolean = false;

  // latest snapshot
  public webcamImage: WebcamImage |null = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();


  @Output()
  public annulerAjouter : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public selfieARenseigner: Selfie = new Selfie();

   constructor(private wookieService : WookieService){ }



  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then((MediaDevices : MediaDeviceInfo[]) =>{

    });
  }


  clickAnnulerSaisie() {
    this.annulerAjouter.emit({});

  }

  clickSurAjouter(){
    this.wookieService.ajouter(this.selfieARenseigner)
                      .subscribe(item => this.selfieARenseigner =item);
  }

  clickSurEnregistrer(){
    console.log("coucou votre selfie a bien été enregistré");
  }

  toggleCamera() {
    this.showCamera = !this.showCamera;
  }

  masquerCamera() {
    this.showCamera = false;
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.photoPrise = true;
  }

  public handleInitError(error: WebcamInitError): void {
    this.messages.push(error);
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      this.addMessage('User denied camera access');
    }
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.addMessage('Received webcam image');
     //console.log(webcamImage);
    this.webcamImage = webcamImage;
  }


  addMessage(message: any): void {
    console.log(message);
    this.messages.unshift(message);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }

    return result;
  }

}
