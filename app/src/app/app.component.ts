import { Component } from '@angular/core';
import {AppService} from 'app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {
  }

  title = 'app';

  login(name: string) {
    this.appService.login(name).subscribe(data => {
      sessionStorage.setItem('token', data.token);
    });
  }
}
