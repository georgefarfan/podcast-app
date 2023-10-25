import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Episodeomponent } from './episode.component';

const routes: Routes = [
  {
    path: ':id',
    component: Episodeomponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeRoutingModule {}
