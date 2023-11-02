import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.page.html',
  styleUrls: ['./perro.page.scss'],
})
export class PerroPage implements OnInit {

  object: Persona | undefined;

  // declarar un array e inicializarlo en 0

  listaPersonas : Persona [] = [{nombre: "Leandro", apellido: "Castillo", edad: 20, estado: true},
                                {nombre: "Jose", apellido: "Mendoza", edad: 44, estado: false},
                                {nombre: "Ezequiel", apellido: "Mamani", edad: 34, estado: true}

              // {luego se puede cargar otros usuarios}
  ];

  constructor() { }

  // Metodo que recorre la lista

  recorrerLista(): void {
    this.listaPersonas.forEach(persona => {
      console.log("Nombre: " + persona.nombre);
      console.log("Apellido: " + persona.apellido)
      console.log("Edad: " + persona.edad + this.esMayorDeEdad(persona.edad));
      console.log("Estado: " + persona.estado);
      console.log("-------------------------------")
    })
  }

  esMayorDeEdad(edad: number): string{
    return edad >= 21? "Es mayor de edad": " No es mayor de edad";
  }

  ngOnInit() {
    this.recorrerLista()
  }

}
