import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class Toast {

    constructor(public toastCtrl: ToastController) {
    }
    crearMensaje(mensaje) {
        let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }
}