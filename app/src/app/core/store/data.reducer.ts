import {Data} from 'core/models/data';
import * as dataActions from './data.actions';
import {createSelector} from '@ngrx/store';

// export interface State {
  // ids: string[];
  // entities: { [id: string]: Data };
  // selectedNoteId: string;
// }

// export const INIT_STATE: State = {
//   ids: [],
//   entities: {},
//   // selectedNoteId: null
// };


export function reducer(state, action: dataActions.All): any {

  switch (action.type) {

    case dataActions.INIT_DATA : {

      // const ids = Object.keys(action.payload);
      // const data = { ...state,
      //   ids,
      //   entities: action.payload
      // };
      // console.log('datataaaaaaa', data);
      return action.payload;
    }

    default:
      return state;
  }
}

// export const getEntities = (state: State) => state.entities;
// export const getIds = (state: State) => state.ids;
// export const getSelectedId = (state: State) => state.selectedNoteId;

// export const getSelected = createSelector(
//     getEntities,
//     // getSelectedId,
//     (entities, id) => entities[id]
// );

export const getEntitiesArray = (state) => state.ids.map(id => {
  return state.entities[id];
});
