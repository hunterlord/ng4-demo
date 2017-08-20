import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'int' })
export class IntPipe implements PipeTransform {
  transform(value: string): number {
    return parseInt(value.replace(/[^\d]+/g, ''));
  }
}
