import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioxPageRoutingModule } from './cuestionariox-routing.module';

import { CuestionarioxPage } from './cuestionariox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioxPageRoutingModule
  ],
  declarations: [CuestionarioxPage]
})
export class CuestionarioxPageModule {}
