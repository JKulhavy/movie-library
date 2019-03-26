import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieGridComponent} from './component/movie-grid/movie-grid.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TitleSearchComponent} from './component/title-search/title-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MovieGridComponent,
    TitleSearchComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
