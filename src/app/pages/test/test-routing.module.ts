import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test.component';

const TestRoutes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TestRoutes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
