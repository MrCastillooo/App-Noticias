import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() titulo: string = '';
  @Input () colorFondo: string = '';

  saludo = "Buenas Tardes";
  comision = "A";


  constructor() { }

  ngOnInit() {}

  mievento() {
    console.log(this.saludo + this.comision)
  }

}
