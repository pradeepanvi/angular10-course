import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
  pure: false,
})
export class StrengthPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
