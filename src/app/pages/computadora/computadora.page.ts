import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computadora',
  templateUrl: './computadora.page.html',
  styleUrls: ['./computadora.page.scss'],
})
export class ComputadoraPage implements OnInit {

  permission: boolean;

  constructor() {
    this.permission = false; // Inicializa permission en el constructor
  }

  ngOnInit() {
    this.permission = true;
  }
}
