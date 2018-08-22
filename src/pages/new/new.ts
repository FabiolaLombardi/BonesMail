import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Img } from 'ionic-angular';
import { Toast } from '../../providers/toast'
import { CorreosProvider } from '../../providers/correos/correos';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  tipo: string;
  item: any;
  de: string = "micorreo@gmail.com"
  para: string = '';
  asunto: string = '';
  new: string = '';
  nombre: string = "Muchacho Mi Correo";
  imagen: 'm.svg';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public toastCtrl: Toast, public correo: CorreosProvider, public events: Events, public storage: Storage) {
    this.tipo = navParams.get('tipo')
    this.item = navParams.get('item')

    if (this.tipo == 'Reply') {
      this.para = this.item.direccion;
      this.asunto = 'Re:' + this.item.asunto
    }
    if (this.tipo == 'Reply All') {
      this.para = this.item.direccion;
      this.asunto = 'Re:' + this.item.asunto
    }
    if (this.tipo == 'Forward') {
      this.asunto = "Re:" + this.item.asunto
    }
  }

  volver() {
    this.viewCtrl.dismiss();
  }

  enviar() {
    let correo = {
      nombre: this.nombre,
      de: this.de,
      para: this.para,
      asunto: this.asunto,
      tipo: this.tipo,
      mensaje: this.new,
      fecha: new Date(),
      imagen: 'm.svg'


    }
    console.log("Mensaje Enviado");
    console.log('De:' + correo.nombre + ' ' + correo.de);
    console.log('Para:' + correo.para);
    console.log('Asunto:' + correo.asunto);
    console.log('Mensaje:' + correo.mensaje);
    console.log('Fecha:' + correo.fecha);



    this.correo.enviados.push(correo);
    this.storage.set('correosEnviados', this.correo.enviados)
      .then()
      .catch(error => {
        console.log(error)
      })
    this.viewCtrl.dismiss();
    this.toastCtrl.crearMensaje("Mensaje Enviado")
  }


}
