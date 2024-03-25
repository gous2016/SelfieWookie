import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { WebcamModule } from 'ngx-webcam';
import { SelfieRoutingModule } from './selfies-routing.module';
import { ConsulteSelfieComponent } from './consulte-selfie/consulte-selfie.component';



@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfieComponent,
    ConsulteSelfieComponent

  ],
  imports: [
    SharedModule,
    CommonModule,
    WebcamModule,
    SelfieRoutingModule

  ],
  exports:[
    SelfieListComponent,
    SelfieRoutingModule

  ]
})
export class SelfieModule { }
