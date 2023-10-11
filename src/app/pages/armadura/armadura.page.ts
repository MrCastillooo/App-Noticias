import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armadura',
  templateUrl: './armadura.page.html',
  styleUrls: ['./armadura.page.scss'],
})
export class ArmaduraPage implements OnInit {

  permission: boolean;

  constructor() {
    this.permission = false; // Inicializa permission en el constructor
  }

  ngOnInit() {
    this.permission = true;
  }

}
