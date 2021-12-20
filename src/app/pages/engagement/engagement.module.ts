import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngagementPageRoutingModule } from './engagement-routing.module';

import { EngagementPage } from './engagement.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngagementPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EngagementPage]
})
export class EngagementPageModule {}
