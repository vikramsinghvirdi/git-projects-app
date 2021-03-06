import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
/**
 * TruncatePipe is used to convert large strings into
 * short strings and concatenate ... at the end.
 * Limit for string can be specified in args array.
 * @param value : string
 * @param args: array
 */
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    if (value) {
      const limit = args.length > 0 ? parseInt(args[0], 10) : 10;
      const trail = args.length > 1 ? args[1] : '...';
      const trimString = value.length > limit? value.substring(0, limit) : value;
      return value.length > limit ? trimString + trail : value;
    }
    return value
  }
}
