import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MovieDetailComponent} from './component/movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {path: 'movie', component: MovieDetailComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
