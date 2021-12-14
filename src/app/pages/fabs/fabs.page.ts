import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabs',
  templateUrl: './fabs.page.html',
  styleUrls: ['./fabs.page.scss'],
})
export class FabsPage implements OnInit {

  titulo = 'Float Actions Buttons';
  items = Array(100);
  constructor() { 
    // Void Constructor
  }

  ngOnInit() {
    // Void
  }

}
