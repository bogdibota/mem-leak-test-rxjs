import { Component, OnDestroy } from '@angular/core';
import { ObsService } from '../obs.service';

export let QQ = 0;

export function consume() {
  QQ++;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnDestroy {

  value = QQ;

  sub;

  constructor(obsService: ObsService) {

    // ------------------ MEM LEAK - unsubscribe is necessary

    this.sub = obsService
      .createInfiniteObservable()
      .subscribe(consume);

    // ------------------ NO MEM LEAK - unsubscribe is NOT necessary

    // obsService
    //   .createFiniteObservable()
    //   .subscribe(consume);

    // obsService
    //   .createInfiniteObservable()
    //   .first()
    //   .subscribe(consume);
    //
    // obsService
    //   .createInfiniteObservable()
    //   .take(1)
    //   .subscribe(consume);
    //
    // obsService
    //   .httpGetCall()
    //   .subscribe(consume);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
