import { Component } from '@angular/core';

import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'fg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  

  constructor() {
    moment.locale('pt-br');
  }
}
