import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos'
import { DetallePage } from '../detalle/detalle'
import { NewPage } from '../new/new'
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
  detallePage = DetallePage;
  listaCorreos: Object;
  newPage = NewPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public correos: CorreosProvider, public modalCtrl: ModalController,
    public events: Events) {
    this.listaCorreos = correos.lista;

  }


  nuevoCorreo(tipo: string) {
    let modal = this.modalCtrl.create(NewPage, { tipo: tipo, correo: '' });
    modal.present();
  }


}

