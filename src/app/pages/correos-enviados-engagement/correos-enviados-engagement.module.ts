import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreosEnviadosEngagementPageRoutingModule } from './correos-enviados-engagement-routing.module';

import { CorreosEnviadosEngagementPage } from './correos-enviados-engagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreosEnviadosEngagementPageRoutingModule
  ],
  declarations: [CorreosEnviadosEngagementPage]
})
export class CorreosEnviadosEngagementPageModule {}
