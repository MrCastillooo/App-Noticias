import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armadura',
  templateUrl: './armadura.page.html',
  styleUrls: ['./armadura.page.scss'],
})
export class ArmaduraPage implements OnInit {

  concederPermiso: boolean = false; 

  armaduras: any[] = [
    {
      nombre: 'Armadura Oscura',
      imagen: 'assets/armaduras/arm1.jpg',
    },
    {
      nombre: 'Armadura Elden Ring',
      imagen: 'assets/armaduras/arm2.jpg',
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }
}
