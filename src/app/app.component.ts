import { Component } from '@angular/core';
import { QQ } from './tile/tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  list = new Array(50);
  val;

  constructor() {
    const interval = setInterval(() => {
      this.list = this.list ? null : new Array(100);
  }, 100);

    setTimeout(() => {
      clearInterval(interval);
      this.list = [];
      setInterval(() => {
        this.val = QQ;
      }, 100);
    }, 10 * 1000);
  }
}
