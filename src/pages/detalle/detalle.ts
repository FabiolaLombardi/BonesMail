import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {InboxPage}  from '../inbox/inbox'
import { NewPage } from '../new/new';

@Component({
    selector: 'page-detalle',
    templateUrl: 'detalle.html',
  })
  export class DetallePage {
    item:Object;
   
    constructor(public navParams: NavParams, public modalCtrl: ModalController){
            this.item=navParams.data
    }

    mostrarModal(tipo:string){
      let modal= this.modalCtrl.create(NewPage, {tipo:tipo, item:this.item});
      modal.present();
    }
  }