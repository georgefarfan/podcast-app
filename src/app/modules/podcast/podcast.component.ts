import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { PodCastDetail } from 'src/app/shared/models/podcast-detail';
import { PodCastAdapterService } from 'src/app/shared/services/podcast-adapter.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodCastComponent implements OnInit {
  podCast$: Observable<PodCastDetail>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private podCastAdapterService: PodCastAdapterService
  ) {}

  ngOnInit(): void {
    this.podCast$ = this.activatedRoute.params.pipe(
      distinctUntilChanged(),
      filter((params) => params['id']),
      map((params) => params['id']),
      switchMap((id) => {
        return this.podCastAdapterService.getPodCast(id);
      })
    );
  }
}
