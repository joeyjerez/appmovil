import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  
  mostrarSelectorDeFecha: boolean = false;

  // Propiedades para almacenar los valores ingresados en los campos
  nombre: string;
  apellido: string;
  nivelEducacional: string;
  fechaNacimiento: string;

  constructor(private alertController: AlertController) {
    this.nombre = '';
  this.apellido = '';
  this.nivelEducacional = '';
  this.fechaNacimiento = '';
   }

  ngOnInit() {
  }

  limpiarCampos() {
    // Lógica para limpiar los campos
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacional = '';
    this.fechaNacimiento = '';
  }

  

  abrirSelectorDeFecha() {
    this.mostrarSelectorDeFecha = true;
  }

  cerrarSelectorDeFecha() {
    this.mostrarSelectorDeFecha = false;
  }

  async mostrarDatos() {
    const alert = await this.alertController.create({
      header: 'Datos Ingresados',
      message: `Nombre: ${this.nombre}  Apellido: ${this.apellido}`,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  
}
