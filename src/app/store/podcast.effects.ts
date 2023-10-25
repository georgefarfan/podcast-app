import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, map, catchError, EMPTY, iif, of } from 'rxjs';
import { PodCastAdapterService } from '../shared/services/podcast-adapter.service';
import {
  findPodCast,
  findPodCastSuccess,
  podCastList,
  podCastListSuccess,
} from './podcast.actions';
import { SessionStorageService } from '../core/session-storage.service';
import { PodCastDetail } from '../shared/models/podcast-detail';
import { PodCastFeed } from '../shared/models/podcast';
import { COMPARE_DATES } from './podcast.const';

@Injectable()
export class PodCastEffects {
  loadPodCast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findPodCast),
      exhaustMap((params) => {
        const currentPodCastList = this.sessionStorageService.getPodCastList();
        let findTrack: any;

        if (currentPodCastList) {
          findTrack = currentPodCastList.entry.find(
            (e) => `${e.detail?.info.trackId}` === params.data
          );
        }

        return iif(
          () => findTrack,
          of(findPodCastSuccess({ data: findTrack?.detail })),
          this.podCastAdapterService.getPodCast(params.data).pipe(
            map((data: PodCastDetail) => {
              const currentPodCast = currentPodCastList as PodCastFeed;
              const podCastFeed: PodCastFeed = {
                ...currentPodCast,
                entry: currentPodCast.entry.map((e) => {
                  return {
                    ...e,
                    detail:
                      e.id.attributes['im:id'] === params.data
                        ? data
                        : e.detail,
                  };
                }),
              };
              this.sessionStorageService.setPodCastList(podCastFeed);
              return findPodCastSuccess({ data });
            }),
            catchError(() => EMPTY)
          )
        );
      })
    )
  );

  loadPodCastList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(podCastList),
      exhaustMap(() => {
        const currentPodCastList = this.sessionStorageService.getPodCastList();
        const currentUpdated = currentPodCastList?.updated.label;
        let pass24Hours = false;

        if (currentUpdated) {
          pass24Hours = COMPARE_DATES(currentUpdated);
        }

        return iif(
          () => !pass24Hours,
          of(podCastListSuccess({ data: currentPodCastList as PodCastFeed })),
          this.podCastAdapterService.getTopList().pipe(
            map((data) => {
              this.sessionStorageService.setPodCastList(data.feed);
              return podCastListSuccess({ data: data.feed });
            }),
            catchError(() => EMPTY)
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private podCastAdapterService: PodCastAdapterService,
    private sessionStorageService: SessionStorageService
  ) {}
}
