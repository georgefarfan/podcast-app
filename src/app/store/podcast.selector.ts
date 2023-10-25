import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PodCastState } from './podcast.reducer';
import {
  PodCastAuthor,
  PodCastEntry,
  PodCastLink,
} from '../shared/models/podcast';
import { LoadingState } from './podcast-store.model';
import { PodCastDetail } from '../shared/models/podcast-detail';

export const featureKey = 'podCast';

export const selectPodCast = createFeatureSelector<PodCastState>(featureKey);

export const selectFindPodCast = createSelector(
  selectPodCast,
  (state: PodCastState): boolean => state.callState === LoadingState.LOADING
);

export const selectIsLoading = createSelector(
  selectPodCast,
  (state: PodCastState): boolean => state.callState === LoadingState.LOADING
);

export const selectIsLoaded = createSelector(
  selectPodCast,
  (state: PodCastState): boolean => state.callState === LoadingState.LOADED
);

export const selectPodCastEntry = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastEntry[] => state.data.entry
);

export const selectPodCastLink = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastLink[] => state.data.link
);

export const selectPodCastAuthor = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastAuthor => state.data.author
);

export const selectPodCastId = createSelector(
  selectPodCast,
  (state: PodCastState): string => state.data.id.label
);

export const selectPodCastUpdated = createSelector(
  selectPodCast,
  (state: PodCastState): string => state.data.updated.label
);

export const selectPodCastRights = createSelector(
  selectPodCast,
  (state: PodCastState): string => state.data.rights.label
);

export const selectPodCastTitle = createSelector(
  selectPodCast,
  (state: PodCastState): string => state.data.title.label
);

export const selectPodCastIcon = createSelector(
  selectPodCast,
  (state: PodCastState): string => state.data.icon.label
);

export const selectCurrentPodCast = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastDetail => state.currentPodCast
);
