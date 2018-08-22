import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular'

import { InboxPage } from '../pages/inbox/inbox'
import { EnviadosPage } from '../pages/enviados/enviados';
import { EliminadosPage } from '../pages/eliminados/eliminados';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = InboxPage;
  inboxPage = InboxPage;
  enviadosPage = EnviadosPage;
  eliminadosPage = EliminadosPage
  noLeidos: any;
  @ViewChild('nav') menu: NavController



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      events.subscribe('total: totalusuarios', total => {
        this.noLeidos = total;
        console.log("subscribing");
      })

    })
  }

  irAPagina(pagina) {
    this.menu.setRoot(pagina);
    this.menuCtrl.close()
  }

}

