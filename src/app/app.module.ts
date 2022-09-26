import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDS25AgYBoYZIJE_e4YChkwVIkFP_tPd5A",

  authDomain: "stuco-site.firebaseapp.com",

  projectId: "stuco-site",

  storageBucket: "stuco-site.appspot.com",

  messagingSenderId: "288191456658",

  appId: "1:288191456658:web:56fa131a7cfd9afc730d4b",

  measurementId: "G-P59G2LKF92"

};


@NgModule({
  declarations: [
    AppComponent,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  imports: [
   

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
