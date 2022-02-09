import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosAdminPageRoutingModule } from './horarios-admin-routing.module';

import { HorariosAdminPage } from './horarios-admin.page';
import {ComponentsModule} from "../../components/components.module";
import { HorariosAdmin } from 'src/app/models/horarios-admin';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HorariosAdminPage]
})
export class HorariosAdminPageModule {
  horarioadmin = {} as HorariosAdmin;

}
