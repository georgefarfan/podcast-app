import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SessionStorageService } from './core/session-storage.service';
import { StoreModule } from '@ngrx/store';
import { podCastReducer } from './store/podcast.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PodCastEffects } from './store/podcast.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ podCast: podCastReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(PodCastEffects),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: SessionStorageService) => () =>
        authService.initialize(),
      multi: true,
      deps: [SessionStorageService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
