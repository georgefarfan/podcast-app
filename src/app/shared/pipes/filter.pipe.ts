import { Pipe, PipeTransform } from '@angular/core';
import { PodCastEntry } from '../models/podcast';

@Pipe({ name: 'filters' })
export class FilterPipe implements PipeTransform {
  transform(items: PodCastEntry[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item) => {
      return (
        item['im:name'].label.includes(filter) ||
        item['im:artist'].label.includes(filter)
      );
    });
  }
}
