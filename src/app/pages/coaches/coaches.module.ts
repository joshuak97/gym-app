import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachesPageRoutingModule } from './coaches-routing.module';

import { CoachesPage } from './coaches.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoachesPage]
})
export class CoachesPageModule {}
