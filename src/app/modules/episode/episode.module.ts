import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Episodeomponent } from './episode.component';
import { EpisodeRoutingModule } from './episode-routing.module';

@NgModule({
  declarations: [Episodeomponent],
  imports: [
    SharedModule,
    EpisodeRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: [],
  bootstrap: [],
})
export class EpisodeModule {}
