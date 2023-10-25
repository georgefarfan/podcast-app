import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PodCastState } from './podcast.reducer';
import { PodCastEntry } from '../shared/models/podcast';
import { LoadingState, TransmissionState } from './podcast-store.model';
import {
  PodCastDetail,
  PodCastTrackInfo,
} from '../shared/models/podcast-detail';

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

export const selectPodCastEntry = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastEntry[] =>
    state.data.entry.map((e) => {
      return {
        ...e,
        mainImage: e['im:image'][e['im:image'].length - 1],
      };
    })
);

export const selectCurrentPodCast = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastDetail => {
    const entry = state.data.entry.find(
      (e) => e.id.attributes['im:id'] === `${state.currentPodCast.info.trackId}`
    );
    return {
      ...state.currentPodCast,
      info: {
        ...state.currentPodCast.info,
        summary: entry?.summary.label,
      },
    };
  }
);

export const selectCurrentPodCastId = createSelector(
  selectPodCast,
  (state: PodCastState): number => state.currentPodCast.info.trackId
);

export const selectCurrentPodCastTrackInfo = createSelector(
  selectPodCast,
  (state: PodCastState): PodCastTrackInfo => {
    return {
      podCast: state.currentPodCast,
      track: state.currentTrack,
    };
  }
);

export const selectIsTransmissionActive = createSelector(
  selectPodCast,
  (state: PodCastState): boolean => {
    return state.transmissionState === TransmissionState.ACTIVE;
  }
);
