import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieItemModel} from '../model/movie-item.model';
import {map} from 'rxjs/operators';

export class GetFilmDetailService {

  constructor(private http: HttpClient) {
  }

  getMovie(url: string): Observable<MovieItemModel[]> {
    return this.http.get<any>(
      url,
    ).pipe(
      map(value => {
          return value.results.map(value1 => {
              return {title: value1.title, director: value1.director, releaseDate: value1.release_date};
            }
          );
        }
      ));
  }
}
