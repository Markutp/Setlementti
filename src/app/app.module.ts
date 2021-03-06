import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, ModalController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ChooseUsernameComponent } from './choose-username/choose-username.component';
import { AuthService } from './core/auth.service';
import {CoreModule} from './core/core.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
    declarations: [AppComponent, ModalComponent, ChooseUsernameComponent],
    entryComponents: [ModalComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireStorageModule,
        AngularFirestoreModule,
        CoreModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
