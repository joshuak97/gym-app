import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() titulo: string;
  inicio: boolean;

  constructor(private menu: MenuController) { 
  // Constructor Vacio
   }

  ngOnInit() {
  
  this.menu.enable(true, 'first');
  if(this.titulo==""){
    this.inicio=true;
  } else {
    this.inicio=false;  
  }

  }

  toogleMenu() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    
  }

}
