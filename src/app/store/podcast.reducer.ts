import { createReducer, on } from '@ngrx/store';
import { PodCastFeed } from '../shared/models/podcast';
import { PODCAST_INTIAL_STATE } from './podcast.const';
import * as Actions from './podcast.actions';
import { CallState, LoadingState } from './podcast-store.model';
import { PodCastDetail } from '../shared/models/podcast-detail';

export interface PodCastState {
  data: PodCastFeed;
  currentPodCast: PodCastDetail;
  callState: CallState;
}

export const initialState: PodCastState = PODCAST_INTIAL_STATE;

export const podCastReducer = createReducer(
  initialState,
  on(Actions.init, (state) => ({
    ...state,
    callState: LoadingState.INIT,
  })),
  on(Actions.podCastList, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(Actions.podCastListSuccess, (state: any, action) => ({
    ...state,
    data: action.data,
    callState: LoadingState.LOADED,
  })),
  on(Actions.findPodCastSuccess, (state: any, action) => ({
    ...state,
    currentPodCast: action.data,
    callState: LoadingState.LOADED,
  }))
);
