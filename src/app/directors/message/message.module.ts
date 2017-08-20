import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageDirective } from './message.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MessageDirective],
  exports: [MessageDirective],
  entryComponents: []
})
export class MessageDirectiveModule {}
