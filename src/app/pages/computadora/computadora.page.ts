import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.page.html',
  styleUrls: ['./computadora.page.scss'],
})
export class ComputadoraPage implements OnInit {

  permission: boolean;
  imagenes: any[];

  constructor() {
    this.permission = false;
    this.imagenes = [
      { src: 'assets/computadoras/descarga.jpeg', alt: 'Galería de imágenes usando cards', title: 'Galería de imágenes usando cards' },
      { src: 'assets/computadoras/images.jpeg', alt: 'Laptop', title: 'Laptop' },
      { src: 'assets/computadoras/laptop.jpeg', alt: 'Computadora Personal', title: 'Computadora Personal' },
      { src: 'assets/computadoras/compu.jpeg', alt: 'Laptop con Funcionalidades', title: 'Laptop con Funcionalidades' },
      { src: 'assets/computadoras/setup.jpg', alt: 'PC gamers', title: 'PC gamers' },
      { src: 'assets/computadoras/setup2.jpg', alt: 'Pc Gamers', title: 'Pc Gamers' }
    ];
  }
  
  ngOnInit() {
    this.permission = true;
  }
}
