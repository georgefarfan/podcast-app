import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PodCastEntry, PodCastResult } from 'src/app/shared/models/podcast';
import { PodCastService } from 'src/app/shared/services/podcast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  podcast$: Observable<PodCastResult>;
  filterValue: string;

  constructor(private podCastService: PodCastService, private router: Router) {}

  ngOnInit(): void {
    this.podcast$ = this.podCastService.getTopList();
  }

  redirectToPodCast(entry: PodCastEntry): void {
    this.router.navigate([`/podcast/${entry.id.attributes['im:id']}`]);
  }
}
