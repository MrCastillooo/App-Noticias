import { Component, OnInit } from '@angular/core';

interface Empleado {
  nombre : string;
  apellido : string;
  dni: number;
  sueldo: number;
  estado_civil: string;
  licencia: boolean;
}

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.page.html',
  styleUrls: ['./computadora.page.scss'],
})
export class ComputadoraPage implements OnInit {

 permission: boolean;

  constructor() {
    this.permission = false; //Inicializa permission en el constructor
  }

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
  
  
  ngOnInit() {
    console.log(this.empleadosFiltrados);
    console.log(this.empleadosFiltrados2);
    this.permission = true;
  }
}
