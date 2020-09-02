import {Action} from '@ngrx/store';
import {Data} from '../models/data';

export const GET_DATA = '[App] GetData'; // client -> socket server (side effect)
export const INIT_DATA = '[App] InitData'; // client -> socket server (side effect)

export class GetData implements Action {
  readonly type = GET_DATA;
}

export class InitData implements Action {
  readonly type = INIT_DATA;
  constructor(public payload?: Data[]) {}
}

export type All = GetData | InitData;

