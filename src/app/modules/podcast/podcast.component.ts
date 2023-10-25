import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, distinctUntilChanged, filter, map } from 'rxjs';
import { PodCastDetail } from 'src/app/shared/models/podcast-detail';
import { findPodCast } from 'src/app/store/podcast.actions';
import { selectCurrentPodCast } from 'src/app/store/podcast.selector';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodCastComponent implements OnInit {
  podCast$: Observable<PodCastDetail> = this.store.select(selectCurrentPodCast);

  constructor(
    private store: Store<{}>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        distinctUntilChanged(),
        filter((params) => params['id']),
        map((params) => params['id'])
      )
      .subscribe((id: string) => {
        this.store.dispatch(findPodCast({ data: id }));
      });
  }
}
