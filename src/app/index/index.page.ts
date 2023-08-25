import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';



@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {


  
  
  mostrarSelectorDeFecha: boolean = false;
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation: Animation;

  

  
  

  

  // Propiedades para almacenar los valores ingresados en los campos
  nombre: string;
  apellido: string;
  nivelEducacional: string;
  fechaNacimiento: string;
  

  constructor(private alertController: AlertController,
    private animationCtrl: AnimationController) {
  this.nombre = '';
  this.apellido = '';
  this.nivelEducacional = '';
  this.fechaNacimiento = '';

  
  this.animation = this.animationCtrl.create();
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
  
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
      this.animation.play();
  }

  
  
}

