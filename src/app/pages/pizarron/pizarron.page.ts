import { Component, OnInit } from '@angular/core';

interface PersonaSaludo {
  nombre: string;
  apellido: string;
  edad: number;
}

interface numeros {
  numero1: number;
  numero2: number;
  numero3: number;
}

@Component({
  selector: 'app-pizarron',
  templateUrl: './pizarron.page.html',
  styleUrls: ['./pizarron.page.scss'],
})
export class PizarronPage implements OnInit {

  constructor() { }

  listaPersona : PersonaSaludo[] = [{nombre: "Leandro", apellido: "Castillo", edad: 19},
                                    {nombre: "Jose", apellido: "Mendoza", edad: 17},
                                    {nombre: "Ezequiel", apellido: "Mamani", edad: 22}
  ];

  recorrerLista(): void {
    this.listaPersona.forEach(persona =>{
      console.log("Buenas Tardes " + persona.nombre + persona.apellido);
      console.log("Ud. tiene " + persona.edad + " años. " + this.esMayorDeEdad(persona.edad));
      console.log("-------------------------------------------")
    })
  }

  esMayorDeEdad(edad: number) : string {
    return edad >= 18? "Entonces es mayor de edad" : "Entonces no es mayor de edad";
  }

  ListaNumeros : numeros[] = [{numero1: 3, numero2: 17, numero3: 4},
                              {numero1: 12, numero2: 2, numero3: 5},
                              {numero1: 1, numero2: 4, numero3: 2}
  ];

  sumarNumeros(numero1: number, numero2: number, numero3: number) : number{
    return numero1 + numero2 + numero3;
  }

  multiplicarNumeros(numero1: number, numero2: number, numero3: number) : number{
    return numero1 * numero2 * numero3;
  }

  recorrernum(): void {
    this.ListaNumeros.forEach(numero =>{
      console.log("Su resultado de la suma es: " + this.sumarNumeros(numero.numero1, numero.numero2, numero.numero3));
      console.log("Su resultado de la multiplicacion es: " + this.multiplicarNumeros(numero.numero1, numero.numero2, numero.numero3));
      console.log("-------------------------------------")
    })
  }

  ngOnInit() {
    this.recorrerLista();
    this.recorrernum()
  }

}
