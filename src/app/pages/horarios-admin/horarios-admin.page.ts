import { Component, OnInit } from '@angular/core';
import { HorariosAdmin } from 'src/app/models/horarios-admin';

@Component({
  selector: 'app-horarios-admin',
  templateUrl: './horarios-admin.page.html',
  styleUrls: ['./horarios-admin.page.scss'],
})
export class HorariosAdminPage implements OnInit {

  horarios = {} as HorariosAdmin;

  titulo = 'Horarios';

  constructor() { }

  ngOnInit() {
  }

}
