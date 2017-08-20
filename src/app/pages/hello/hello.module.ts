import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';

import { PipesModule } from '../../pipes/pipes.module';
import { MessageDirectiveModule } from '../../directors/message/message.module';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HelloRoutingModule,
    PipesModule,
    MessageDirectiveModule,
    TooltipModule
  ],
  declarations: [HelloComponent]
})
export class HelloModule {}
