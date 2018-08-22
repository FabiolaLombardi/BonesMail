import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos'
import { DetallePage } from '../detalle/detalle';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {
  detallePage = DetallePage
  listaDeCorreos;
  total;
  listaEliminados;
  constructor(public navCtrl: NavController, public navParams: NavParams, public correos: CorreosProvider, public events: Events, public storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('correosEnviados')
      .then((correosEnviados) => {
        if (correosEnviados == null) {
          this.listaDeCorreos = [];
          this.correos.enviados = [];
        } else {
          this.listaDeCorreos = correosEnviados;
          this.correos.enviados = this.listaDeCorreos
          this.total = this.listaDeCorreos.length;
          this.events.publish('total: totalusuarios', this.total);
          console.log("publishing", this.total)
        }
      })
      .catch(error => { console.log(error) })
  }

  delete(correo){
    let position = this.listaDeCorreos.lastIndexOf(correo);
    this.listaDeCorreos.splice(position, 1);
    console.log(this.listaDeCorreos);
    this.storage.set('correosEnviados',this.listaDeCorreos)
    this.correos.eliminados.push(correo);
    this.storage.set('correosEliminados', this.correos.eliminados)
  }



}
