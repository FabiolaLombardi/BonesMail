import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InboxPage } from '../pages/inbox/inbox'
import { CorreosProvider } from '../providers/correos/correos';
import { DetallePage } from '../pages/detalle/detalle';
import { NewPage } from '../pages/new/new';
import { Toast } from '../providers/toast'
import { EnviadosPage } from '../pages/enviados/enviados';
import { IonicStorageModule } from '@ionic/storage';
import { EliminadosPage } from '../pages/eliminados/eliminados';

@NgModule({
  declarations: [
    MyApp,
    InboxPage,
    DetallePage,
    NewPage,
    EnviadosPage,
    EliminadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InboxPage,
    DetallePage,
    NewPage,
    EnviadosPage,
    EliminadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CorreosProvider,
    Toast,
    IonicStorageModule
  ]
})
export class AppModule { }
