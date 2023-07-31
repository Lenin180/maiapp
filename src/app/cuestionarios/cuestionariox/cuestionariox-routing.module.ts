import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionarioxPage } from './cuestionariox.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionarioxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionarioxPageRoutingModule {}
