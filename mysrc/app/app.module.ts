import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';



import { AngularFirestore } from 'angularfire2/firestore';

//import { AngularFirestoreModule } from 'angularfire2/firestore';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
AngularFireModule.initializeApp(environment.firebase),

AngularFireDatabaseModule,
AngularFirestore,
//AngularFirestoreModule


  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
