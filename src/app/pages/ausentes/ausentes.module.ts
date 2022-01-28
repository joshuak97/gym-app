import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusentesPageRoutingModule } from './ausentes-routing.module';

import { AusentesPage } from './ausentes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusentesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AusentesPage]
})
export class AusentesPageModule {}
