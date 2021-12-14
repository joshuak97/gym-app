import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-slider',
  templateUrl: './list-slider.page.html',
  styleUrls: ['./list-slider.page.scss'],
})
export class ListSliderPage implements OnInit {
 
  usuarios: any;
  @ViewChild('lista') lista: IonList;

  constructor(private service: DataService) {//
   }

  ngOnInit() {//
  this.service.getUsers().then(users => {
    this.usuarios = users as any;
    console.log(this.usuarios);
  });
  }

  favorite() {
    this.lista.closeSlidingItems();
  }

}
