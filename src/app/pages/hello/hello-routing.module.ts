import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello.component';

const HelloRoutes: Routes = [
  {
    path: '',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HelloRoutes)],
  exports: [RouterModule]
})
export class HelloRoutingModule {}
