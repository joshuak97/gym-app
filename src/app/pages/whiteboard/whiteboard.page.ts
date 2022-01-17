import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.page.html',
  styleUrls: ['./whiteboard.page.scss'],
})
export class WhiteboardPage implements OnInit {

  titulo = 'Whiteboard';
  visualizarWhiteBoard = false;
  visualizarWhiteBoard2 = false;
  fechaSelected: string;
  programaSelected: number;

  constructor() { 
    //
  }

  ngOnInit() {//
  }

  mostrarWthiteBoard(){
   this.visualizarWhiteBoard = !this.visualizarWhiteBoard;
  }

  mostrarWthiteBoard2(){
    this.visualizarWhiteBoard2 = !this.visualizarWhiteBoard2;
  }


  mostrarResultadosWhiteboard(){
    if (this.fechaSelected && this.programaSelected) {
      this.visualizarWhiteBoard = true;
    } else {
      this.visualizarWhiteBoard =  false;
    }
  }

}
