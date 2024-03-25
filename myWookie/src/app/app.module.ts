
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/modules/shared/shared.module';
import { SelfieModule } from './features/selfies/selfie.module';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    NotfoundComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelfieModule,
    AppRoutingModule,
    SharedModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
