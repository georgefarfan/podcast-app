import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { PodCastDetail } from 'src/app/shared/models/podcast-detail';
import { PodCastAdapterService } from 'src/app/shared/services/podcast-adapter.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class Episodeomponent implements OnInit {
  podCast$: Observable<PodCastDetail>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private podCastAdapterService: PodCastAdapterService
  ) {}

  ngOnInit(): void {}
}
