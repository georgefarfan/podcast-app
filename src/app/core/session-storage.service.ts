import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { podCastList } from '../store/podcast.actions';
import { PodCastFeed } from '../shared/models/podcast';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  public podCastList$: BehaviorSubject<PodCastFeed | null>;

  constructor(private store: Store<{}>) {
    this.podCastList$ = new BehaviorSubject<PodCastFeed | null>(null);
  }

  initialize(): void {
    this.store.dispatch(podCastList());
  }

  getPodCastList(): PodCastFeed | null {
    return JSON.parse(localStorage['podCastList']);
  }

  setPodCastList(data: PodCastFeed): void {
    localStorage.setItem('podCastList', JSON.stringify(data));
  }
}
