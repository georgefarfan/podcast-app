import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PodCastDetail, PodCastDetailResult } from '../models/podcast-detail';
import { PodCastService } from './podcast.service';

@Injectable({ providedIn: 'root' })
export class PodCastAdapterService {
  constructor(private podCastService: PodCastService) {}

  getPodCast(id: string): Observable<PodCastDetail> {
    return this.podCastService.getPodCast(id).pipe(
      map((result: PodCastDetailResult) => {
        return {
          info: result.results[0],
          tracks: result.results.slice(1),
        } as PodCastDetail;
      })
    );
  }
}
