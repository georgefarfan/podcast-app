import { NgModule } from '@angular/core';
import { PodCastCardComponent } from './components/podcast-card/podcast-card.component';
import { CommonModule } from '@angular/common';
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FilterPipe } from './pipes/filter.pipe';
import { PodCastInfoComponent } from './components/podcast-info/podcast-info.component';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [FilterPipe, PodCastCardComponent, PodCastInfoComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [FilterPipe, PodCastCardComponent, PodCastInfoComponent],
  providers: [TranslateStore],
  bootstrap: [],
})
export class SharedModule {}
