import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkify',
})
export class LinkifyPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(?:(https?\:\/\/[^\s]+))/m, '<a href="$1">$1</a>');
  }
}
