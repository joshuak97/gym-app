import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

 titulo = 'Loading';

  constructor(private loadingController: LoadingController) {
    // Void
   }

  ngOnInit() {
   this.presentLoading('Mensaje ...');
   setTimeout(()=>{
   this.loadingController.dismiss();
   }, 1500);
  }

  async presentLoading(message: string) {
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   duration: 2000,
    // };
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message,
    });
    await loading.present();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
