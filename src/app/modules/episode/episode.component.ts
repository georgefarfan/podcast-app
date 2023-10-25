import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, distinctUntilChanged, filter, map } from 'rxjs';
import {
  PodCastDetail,
  PodCastTrackInfo,
  Track,
} from 'src/app/shared/models/podcast-detail';
import { findPodCastEpisode } from 'src/app/store/podcast.actions';
import {
  selectCurrentEpisode,
  selectCurrentPodCast,
  selectCurrentPodCastId,
  selectCurrentPodCastTrackInfo,
} from 'src/app/store/podcast.selector';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class Episodeomponent implements OnInit {
  podCastTrackInfo$: Observable<PodCastTrackInfo> = this.store.select(
    selectCurrentPodCastTrackInfo
  );

  _id: string;

  constructor(
    private store: Store<{}>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        distinctUntilChanged(),
        filter((params) => params['id']),
        map((params) => params['id'])
      )
      .subscribe((id: string) => {
        this._id = id;
        this.store.dispatch(findPodCastEpisode({ data: id }));
      });
  }

  goBackDetail(): void {
    this.store.select(selectCurrentPodCastId).subscribe((trackId) => {
      this.router.navigate([`podcast/${trackId}`]);
    });
  }
}
