import * as fromData from './data.reducer';
import * as fromRoot from 'app/core/store';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Data} from 'core/models/data';


// export interface DataState {
//   data: fromData.State;
// }

export interface State {
  data: Data[];
}

export const reducers = {
  data: fromData.reducer
};


// export const getDataRootState = createFeatureSelector<DataState>('kjlhlhl');
// export const getDataState = createSelector(getDataRootState, (dataState: DataState) => dataState.data);
//
// export const getEntities = createSelector(getDataState, fromData.getEntities);
// export const getIds = createSelector(getNotesState, fromData.getIds);
// export const getSelectedId = createSelector(getNotesState, fromData.getSelectedId);
// export const getSelected = createSelector(getNotesState, fromData.getSelected);
// export const getEntitiesArray = createSelector(getDataState, fromData.getEntitiesArray);
