import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CorreosProvider {

  lista = [{
    nombre: 'Barbara Ortega',
    direccion: 'carloso@gmail.com',
    asunto: 'Bienvenido!',
    mensaje: 'Bienvenido es un nombre propio masculino de origen latino en su variante en español. Su significado etimológico es igual a la palabra homónima',
    fecha: 'Lunes, 15 de agosto del 2018',
    imagen: 'b.svg'
  },
  {
    nombre: 'Pablo Flores',
    direccion: 'flowersfelipe@gmail.com',
    asunto: 'Hello?',
    mensaje: 'I have not heard from you for a couple of weeks, i am worried. Please call me',
    fecha: 'Miercoles, 4 de septiembre del 2018',
    imagen: 'pb.png'
  },
  {
    nombre: 'Daniel Alvarez',
    direccion: 'danielsitoa@hotmail.com',
    asunto: 'Invitacion',
    mensaje: 'Tu evento empieza en el momento que mandas las invitaciones. La gente va a decidir ir o no ir según el contenido de tu invitación.',
    fecha: 'Jueves, 16 de octumbre del 2018 ',
    imagen: 'db.png'

  },
  {
    nombre: 'Maria Melean',
    direccion: 'mariameleaan@hotmail.com',
    asunto: 'Renuncia',
    mensaje: ' La renuncia es el acto jurídico unilateral por el cual una persona manifiesta su voluntad de discontinuar permanentemente el goce de un derecho o de extinguir un vínculo jurídico.',
    fecha: 'Viernes, 7 de noviembre del 2018',
    imagen: 'm.svg'
  },
  {
    nombre: 'Roberto Rodriguez',
    direccion: 'robbier@gmail.com',
    asunto: 'Feliz Navidad!',
    mensaje: 'Te deseo una muy feliz navidad y miles de bencidiones. Te quiero mucho y miss you a lot. Besos',
    fecha: 'Domingo, 24 de diciembre del 2018',
    imagen: 'rb.png'
  }];

  enviados = [];

  eliminados = [];
}
