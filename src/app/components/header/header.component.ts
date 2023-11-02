import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  // variable declarada string y boleeano
  variableBooleanystring : string | boolean | undefined;
  variableBooleanystring2 : string | boolean = "asd";
  variableBooleanystring3 : string | boolean = true;

  @Input() titulo: string = '';
  @Input () colorFondo: string = '';

  saludo = "Buenas Tardes Comision ";
  comision = "A";

  // declarar variable de entrada

  @Input()
  titulo2 : string | undefined;


  constructor() { }

  ngOnInit() {}

  mievento() {
    console.log(this.saludo + this.comision)
  }

}
