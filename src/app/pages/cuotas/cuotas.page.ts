import { Component, OnInit } from '@angular/core';
import { Cuotas } from 'src/app/models/cuotas';

@Component({
  selector: 'app-cuotas',
  templateUrl: './cuotas.page.html',
  styleUrls: ['./cuotas.page.scss'],
})
export class CuotasPage implements OnInit {
  cuotas = {} as Cuotas;


  titulo = 'Cuotas'

  constructor() { }

  ngOnInit() {
  }

}
