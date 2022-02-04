import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomaticoEngagementPageRoutingModule } from './automatico-engagement-routing.module';

import { AutomaticoEngagementPage } from './automatico-engagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomaticoEngagementPageRoutingModule
  ],
  declarations: [AutomaticoEngagementPage]
})
export class AutomaticoEngagementPageModule {}
