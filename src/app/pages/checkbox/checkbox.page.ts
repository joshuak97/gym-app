import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

titulo = 'Checkbox';
data = [
  {
    name: 'primary',
    selected: true
  },
  {
    name: 'secondary',
    selected: true
  },
  {
    name: 'tertiary',
    selected: false
  },
  {
    name: 'success',
    selected: true
  }

];

  constructor() {
    // void
   }

  ngOnInit() {
    // void
  }

  onClick( check ) {
   console.log(check);
  }

}
