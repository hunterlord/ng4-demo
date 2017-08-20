import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent as MainLayoutComponent } from './layouts/main.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, TooltipModule.forRoot()],
  declarations: [AppComponent, MainLayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
