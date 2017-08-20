import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'string' })
export class StringPipe implements PipeTransform {
  transform(value: string, append1: string, append2: string): string {
    const result = value.replace(/[\d]+/g, '');
    const args = Array.prototype.slice.call(arguments);
    return result + append1 + append2 + args.slice(3).join(' plus ');
  }
}
