import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromNotesStore from 'core/store';
import {DataEffects} from 'core/store/data.effects';

import { AppComponent } from 'app.component';
import { ListComponent } from 'list/list.component';
import { ChartComponent } from 'chart/chart.component';
import { SummaryComponent } from 'summary/summary.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ChartComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromNotesStore.reducers),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
