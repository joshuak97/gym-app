import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = environment.apiBackend;
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'


  });
  constructor(private http: HttpClient,
              private router: Router,
              private toastController: ToastController) {
  }

  // Metodo obtiene el token por medio del usuario y la contraseña
  public login(correo: string,password:string) {
    const params = new HttpParams();
    params.append('correo',  correo);
    params.append('password',  password);
    return new Promise((resolve) => {
      this.http.get(`${this.url}/login?correo=${correo}&password=${password}`).subscribe(async response => {
        if (response['status'] == 200) {
          sessionStorage.setItem('token', response['token']);
          sessionStorage.setItem('usuario', response['message']);
          this.router.navigateByUrl('/inicio').then();
        } else {
          // Se muestra alerta de fallo
          const toast = await this.toastController.create({
            message: 'Correo o contraseña invalidos!.',
            color: 'danger',
            position: 'top',
            duration: 3000
          });
          toast.present();
        }

      }, async err => {
        const toast = await this.toastController.create({
          message: 'Ha ocurrido un error, por favor intente de nuevo!.' + err,
          color: 'danger',
          position: 'top',
          duration: 3000
        });
        toast.present();
      });
  });
  }

  public testAuth() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/login').then();
    }
  }

  // Metodo que nos ayuda a cerrar sesion:
  public logout() {
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('usuario', null);
    this.router.navigateByUrl('/login').then();
  }

}
