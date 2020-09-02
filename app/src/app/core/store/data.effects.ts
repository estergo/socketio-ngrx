import {Injectable} from '@angular/core';
import {Observable, of } from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';

import {DataService} from '../services/data.service';
import * as dataActions from './data.actions';
import {startWith, switchMap, tap} from 'rxjs/internal/operators';


@Injectable()

export class DataEffects {

  @Effect({dispatch: false}) // effect will not dispatch any actions
  getData$ = this.actions$.pipe(
    ofType(dataActions.GET_DATA),  // requesting the socket server to get data
    startWith(new dataActions.GetData())).pipe(  // get data automatically when applications starts
    tap(() => this.dataService.getData())
  );

  @Effect()
  initData$: Observable<Action> =
    this.dataService.data$ // listen to the socket for init data event
      .pipe(switchMap(data =>
        of(new dataActions.InitData(data)) // ask the the store to populate the data
      ));

  constructor(private actions$: Actions, private dataService: DataService) {
  }
}
