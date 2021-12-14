import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-input',
  templateUrl: './ion-input.page.html',
  styleUrls: ['./ion-input.page.scss'],
})
export class IonInputPage implements OnInit {

  titulo = 'Ion Input';
  nombre: string;
  
  usuario = {
    email: '',
    password: ''

  }

  constructor() {
    // void
   }

  ngOnInit() {
    // void
  }

  onSubmitTemplate() {
    console.log('Form Inputs');
  }

}
