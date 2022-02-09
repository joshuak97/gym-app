import { Component, OnInit } from '@angular/core';
import { Descuentos } from 'src/app/models/descuentos';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.page.html',
  styleUrls: ['./descuentos.page.scss'],
})
export class DescuentosPage implements OnInit {

  descuentos = {} as Descuentos;

  titulo = 'Descuentos';

  constructor() { }

  ngOnInit() {
  }

}
