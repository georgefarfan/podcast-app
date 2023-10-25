import { NgModule } from '@angular/core';
import { PodCastRoutingModule } from './podcast-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PodCastComponent } from './podcast.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PodCastComponent],
  imports: [
    SharedModule,
    PodCastRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PodCastModule {}
