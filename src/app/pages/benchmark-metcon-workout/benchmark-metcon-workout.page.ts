import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark-metcon-workout',
  templateUrl: './benchmark-metcon-workout.page.html',
  styleUrls: ['./benchmark-metcon-workout.page.scss'],
})
export class BenchmarkMetconWorkoutPage implements OnInit {

  titulo = 'Benchmark-Metcon';
  visualizarWhiteBoard = false;
  componente: any;
  constructor() { }

  ngOnInit() {
  }

}
