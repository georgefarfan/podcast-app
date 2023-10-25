import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, distinctUntilChanged, filter, map } from 'rxjs';
import { PodCastDetail, Track } from 'src/app/shared/models/podcast-detail';
import { findPodCast } from 'src/app/store/podcast.actions';
import {
  selectCurrentPodCast,
  selectIsLoading,
} from 'src/app/store/podcast.selector';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodCastComponent implements OnInit {
  podCast$: Observable<PodCastDetail> = this.store.select(selectCurrentPodCast);
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
        this.store.dispatch(findPodCast({ data: id }));
      });
  }

  redirectToEpidose(track: Track): void {
    this.router.navigate([`podcast/${this._id}/episode/${track.trackId}`]);
  }
}
