import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromDataStore from 'core/store';
import {map} from 'rxjs/internal/operators';
import {Data} from 'core/models/data';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  data$: Observable<any>;

  constructor(private store: Store<fromDataStore.State>) {
  }

  ngOnInit(): void {
    this.data$ = this.store.select('data').pipe(
      // TODO move this functionality to the reducer
      map((data: Data[]) => {
          let summary = 0;
          if (data) {
            data.forEach(item => {
              summary += item.sum;
            });
          }
          return summary;
        }
      )
    );
  }

}
