import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualEngagementPageRoutingModule } from './manual-engagement-routing.module';

import { ManualEngagementPage } from './manual-engagement.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualEngagementPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManualEngagementPage]
})
export class ManualEngagementPageModule {}
