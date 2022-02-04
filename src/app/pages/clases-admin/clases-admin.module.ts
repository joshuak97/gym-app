import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesAdminPageRoutingModule } from './clases-admin-routing.module';

import { ClasesAdminPage } from './clases-admin.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClasesAdminPage]
})
export class ClasesAdminPageModule {}
