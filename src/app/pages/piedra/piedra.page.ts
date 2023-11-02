import { Component, OnInit } from '@angular/core';

interface Instituto {
  nombre : string;
  domicilio : string;
  telefono : number;
  cuil : number;
  cantidad_alumnos : number;
  cantidad_aulas : number;
  abierto : boolean;
  carreras : 'Teologia' | 'Psicologia' | 'Informatica' | 'Ingles';
  divisiones : '1A' | '2A' | '1B' | '2B' | '1C' | '2C'; 
}

@Component({
  selector: 'app-piedra',
  templateUrl: './piedra.page.html',
  styleUrls: ['./piedra.page.scss'],
})
export class PiedraPage implements OnInit {

  constructor() { }

  listaInsti : Instituto [] = [{nombre: "Instituto Superior del Milagro", domicilio:"Alvarado 233", telefono: 3875964856, cuil: 87495738498, cantidad_alumnos: 605, cantidad_aulas: 6, abierto: true, carreras: 'Teologia', divisiones: '1A'},
                               {nombre: "Instituto Salta", domicilio:"Belgrano 543", telefono: 3874975647, cuil: 40955745878, cantidad_alumnos: 400, cantidad_aulas: 10, abierto: true, carreras: 'Informatica', divisiones: '1B'},
                               {nombre: "Instituto Jean Piaget", domicilio:"San Martin 867", telefono: 3874987564, cuil: 47895755498, cantidad_alumnos: 500, cantidad_aulas: 25, abierto: false, carreras: 'Ingles', divisiones: '2B'},
                               {nombre: "Instituto San Martin", domicilio:"San Juan 546", telefono: 3874981234, cuil: 32795634498, cantidad_alumnos: 800, cantidad_aulas: 20, abierto: true, carreras: 'Psicologia', divisiones: '1C'},
  ]

  institutosFiltrados = this.listaInsti.filter((instituto) =>{
    return (instituto.abierto && instituto.cantidad_alumnos > 300 && instituto.carreras === 'Informatica') || (instituto.abierto && instituto.cantidad_alumnos < 500 && instituto.carreras === 'Ingles');
  });

  ngOnInit() {
    console.log(this.institutosFiltrados)
  }

}
