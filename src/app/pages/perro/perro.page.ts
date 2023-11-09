import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

interface Empleado {
  nombre : string;
  apellido : string;
  dni: number;
  sueldo: number;
  estado_civil: string;
  licencia: boolean;
}

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


  listaEmpleados: Empleado[] = [
    {nombre: "Leandro", apellido: "Castillo", dni: 44876567, sueldo: 450, estado_civil: "soltero", licencia: true},
    {nombre: "Juan", apellido: "Gomez", dni: 44987564, sueldo: 650, estado_civil: "casado", licencia: false},
  ];
  
  empleadosFiltrados = this.listaEmpleados.filter((empleado) => {
    return (empleado.licencia === false && empleado.sueldo >= 300 && empleado.sueldo <= 450);
  });
  
  empleadosFiltrados2 = this.listaEmpleados.filter((empleado2) => {
    return (empleado2.estado_civil === 'casado' && empleado2.licencia === true);
  });


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
    console.log(this.empleadosFiltrados);
    console.log(this.empleadosFiltrados2);
  }

}
