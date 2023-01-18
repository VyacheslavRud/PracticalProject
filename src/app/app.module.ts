import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from "./main/main.module";
import {GridModule} from "./grid/grid.module";
import {SortByLetterModule} from "./sort-by-letter/sort-by-letter.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    GridModule,
    AppRoutingModule,
    SortByLetterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
