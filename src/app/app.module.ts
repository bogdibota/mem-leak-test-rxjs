import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { CommonModule } from '@angular/common';
import { ObsService } from './obs.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/take';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
  ],
  providers: [
    ObsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
