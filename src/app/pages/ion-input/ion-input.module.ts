import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonInputPageRoutingModule } from './ion-input-routing.module';

import { IonInputPage } from './ion-input.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonInputPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonInputPage]
})
export class IonInputPageModule {}
