import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitaGanaPageRoutingModule } from './invita-gana-routing.module';

import { InvitaGanaPage } from './invita-gana.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitaGanaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InvitaGanaPage]
})
export class InvitaGanaPageModule {}
