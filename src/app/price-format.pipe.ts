import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: string): string {
    const dollars = parseFloat(value);
    return `$${dollars.toFixed(2)}`;
  }
}
