import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodCastComponent } from './podcast.component';

const routes: Routes = [
  {
    path: ':id',
    children: [
      {
        path: '',
        component: PodCastComponent,
        pathMatch: 'full',
      },
      {
        path: 'episode',
        loadChildren: () =>
          import('../episode/episode.module').then((m) => m.EpisodeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodCastRoutingModule {}
