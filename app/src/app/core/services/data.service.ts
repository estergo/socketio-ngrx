import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SocketService} from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data$: Observable<any>;

  constructor(private socket: SocketService) {
    this.socket.join('getData');
    this.data$ = this.socket.listen('[App] InitData');
  }

  // These methods will be called by ngrx effects (do not use directly in the components)
  getData(): void {
    this.socket.emit('[App] GetData');
  }
}
