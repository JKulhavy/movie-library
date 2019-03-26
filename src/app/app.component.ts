import {Component} from '@angular/core';
import {GetMoviesService} from './service/get-films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-library';

  constructor(private getMoviesService: GetMoviesService) {
    this.getMoviesService.getMovies('j').subscribe(value => console.log(value));
  }
}
