import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CorreosProvider } from '../../providers/correos/correos';
import {DetallePage} from '../../pages/detalle/detalle'

@IonicPage()
@Component({
  selector: 'page-eliminados',
  templateUrl: 'eliminados.html',
})
export class EliminadosPage {
  eliminadosPage= EliminadosPage;
  listaEliminados;
  detallePage = DetallePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public correos: CorreosProvider) {
  }

  ionViewWillEnter() {
    this.storage.get('correosEliminados')
      .then((correosEliminados) => {
        if (correosEliminados == null) {
          this.listaEliminados = [];
          this.correos.eliminados = [];
        } else {
          this.listaEliminados = correosEliminados;
          this.correos.eliminados = this.listaEliminados
        }
      })
      .catch(error => { console.log(error) })
  }


}
