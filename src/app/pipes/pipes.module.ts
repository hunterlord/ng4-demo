import { NgModule } from '@angular/core';

import { IntPipe } from './int';
import { StringPipe } from './string';

const pipes = [IntPipe, StringPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes]
})
export class PipesModule {}
