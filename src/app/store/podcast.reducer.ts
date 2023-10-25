import { createReducer, on } from '@ngrx/store';
import { PodCastFeed } from '../shared/models/podcast';
import { PODCAST_INTIAL_STATE } from './podcast.const';
import * as Actions from './podcast.actions';
import {
  CallState,
  LoadingState,
  TransmissionState,
} from './podcast-store.model';
import { PodCastDetail, Track } from '../shared/models/podcast-detail';

export interface PodCastState {
  data: PodCastFeed;
  currentPodCast: PodCastDetail;
  currentTrack: Track;
  callState: CallState;
  transmissionState: TransmissionState;
}

export const initialState: PodCastState = PODCAST_INTIAL_STATE;

export const podCastReducer = createReducer(
  initialState,
  on(Actions.init, (state) => ({
    ...state,
    callState: LoadingState.INIT,
  })),
  on(
    Actions.podCastList,
    Actions.findPodCast,
    Actions.findPodCastEpisode,
    (state) => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),

  on(Actions.podCastListSuccess, (state: any, action) => ({
    ...state,
    data: action.data,
    callState: LoadingState.LOADED,
  })),

  on(Actions.findPodCastSuccess, (state: any, action) => ({
    ...state,
    currentPodCast: action.data,
    callState: LoadingState.LOADED,
  })),

  on(Actions.findPodCastEpisodeSuccess, (state: any, action) => ({
    ...state,
    currentPodCast: action.data,
    currentTrack: action.track,
    callState: LoadingState.LOADED,
  })),

  on(Actions.setTransmission, (state: any, action) => ({
    ...state,
    transmissionState: action.data,
  }))
);
