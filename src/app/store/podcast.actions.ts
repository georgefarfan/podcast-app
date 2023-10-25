import { createAction, props } from '@ngrx/store';
import { PodCastFeed } from '../shared/models/podcast';
import { PodCastDetail } from '../shared/models/podcast-detail';

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
