import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from 'core/models/data';
import {Store} from '@ngrx/store';
import * as fromDataStore from 'core/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  data$: Observable<Data[]>;

  constructor(private store: Store<fromDataStore.State>) {
  }

  ngOnInit(): void {
    this.data$ = this.store.select('data');
  }
}
