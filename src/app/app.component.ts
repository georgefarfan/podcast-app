import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setTransmission } from './store/podcast.actions';
import { TransmissionState } from './store/podcast-store.model';
import { Observable } from 'rxjs';
import { selectIsTransmissionActive } from './store/podcast.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tramissionActive$: Observable<boolean>;

  constructor(private store: Store<{}>, router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(event);
        if (event.url === '/') {
          this.store.dispatch(
            setTransmission({
              data: TransmissionState.INACTIVE,
            })
          );
        }
        if (event.url.includes('podcast') || event.url.includes('episode')) {
          this.store.dispatch(
            setTransmission({
              data: TransmissionState.ACTIVE,
            })
          );
        }
      }
    });
  }

  ngOnInit(): void {
    this.tramissionActive$ = this.store.select(selectIsTransmissionActive);
  }
}
