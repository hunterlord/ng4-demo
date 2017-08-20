import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent as MainLayoutComponent } from './layouts/main.component';

const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/hello/hello.module#HelloModule'
      }
    ]
  },
  {
    path: 'demo',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/demo/demo.module#DemoModule'
      }
    ]
  },
  {
    path: 'test',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/test/test.module#TestModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
