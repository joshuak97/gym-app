import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  titulo = 'Infinity Scroll';
  data = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; 

  constructor() { 
    // Void Constructor
  }

  ngOnInit() {
   // Void
  }

  loadData( event ) {
    if (this.data.length>50) {
      event.target.complete();
      this.infiniteScroll.disabled = true;
    } else {  
    console.log('cargando elementos...');
    setTimeout( ()=> {
      const array = Array(20);
      this.data.push(...array);
      event.target.complete();
    },1000);
  } 
  }

}
