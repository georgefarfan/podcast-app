import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PodCastEntry } from 'src/app/shared/models/podcast';
import { selectPodCastEntry } from 'src/app/store/podcast.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  podcastEntry$: Observable<PodCastEntry[]>;
  filterValue: string;
  entry$ = this.store.select(selectPodCastEntry);

  constructor(private store: Store<{}>, private router: Router) {}

  ngOnInit(): void {
    this.podcastEntry$ = this.store.select(selectPodCastEntry);
  }

  redirectToPodCast(entry: PodCastEntry): void {
    this.router.navigate([`/podcast/${entry.id.attributes['im:id']}`]);
  }
}
