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
      imagen: 'https://www.oscurossecretos.com.ar/e/uploads/pngegg.png',
    },
    {
      nombre: 'Armadura Elden Ring',
      imagen: 'https://static1-es.millenium.gg/articles/0/46/55/0/@/248082-1-article_m-2.png',
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }
}
