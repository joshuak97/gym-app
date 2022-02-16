import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Perfil} from "../../models/perfil";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo = '';
  password = '';
  errores: string[];
  perfil = {} as Perfil;

  constructor(private service: LoginService) {
  }

  ngOnInit() {
  }

  public logIn() {
    this.service.login(this.correo, this.password).then(response => {
      console.log(response);
    });
  }

  mostrarFotoPerfil() {
    if (!this.perfil.logo_gym) {
      return '/assets/icon/logo2.jpeg';
    } else {
      return this.perfil.logo_gym;
    }
  }

}
