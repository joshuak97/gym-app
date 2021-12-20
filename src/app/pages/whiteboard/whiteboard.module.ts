import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiteboardPageRoutingModule } from './whiteboard-routing.module';

import { WhiteboardPage } from './whiteboard.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiteboardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WhiteboardPage]
})
export class WhiteboardPageModule {}
