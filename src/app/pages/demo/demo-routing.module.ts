import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';

const DemoRoutes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(DemoRoutes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
