import { createAction, props } from '@ngrx/store';
import { PodCastFeed } from '../shared/models/podcast';
import { PodCastDetail, Track } from '../shared/models/podcast-detail';
import { TransmissionState } from './podcast-store.model';

export const init = createAction('[PodCast] -  INIT', props<{ data: any }>());

export const podCastList = createAction('[PodCast] -  LOAD LIST');
export const podCastListSuccess = createAction(
  '[PodCast] -  LOAD LIST SUCCESS',
  props<{ data: PodCastFeed }>()
);

export const findPodCast = createAction(
  '[PodCast] -  FIND PODCAST',
  props<{ data: string }>()
);

export const findPodCastSuccess = createAction(
  '[PodCast] -  FIND PODCAST SUCCESS',
  props<{ data: PodCastDetail }>()
);

export const findPodCastEpisode = createAction(
  '[PodCast] -  FIND PODCAST EPISODE',
  props<{ data: string }>()
);

export const findPodCastEpisodeSuccess = createAction(
  '[PodCast] -  FIND PODCAST EPISODE SUCCESS',
  props<{ data: PodCastDetail; track: Track }>()
);

export const setTransmission = createAction(
  '[PodCast] -  SET TRANSMISSION',
  props<{ data: TransmissionState }>()
);
