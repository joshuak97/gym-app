import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @Input() titulo: string;
  inicio: boolean;

  constructor(private menu: MenuController,
              private authService: LoginService) {
  // Constructor Vacio
   }

  ngOnInit() {
  this.authService.testAuth();
  this.menu.enable(true, 'first');
  if(this.titulo === '' || this.titulo === 'Dashboard'){
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
