import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MovieItemModel} from '../model/movie-item.model';

@Injectable({providedIn: 'root'})
export class GetMoviesService {

  constructor(private http: HttpClient) {
  }

  getMovies(name?: string): Observable<MovieItemModel[]> {
    return this.http.get<any>(
      'https://swapi.co/api/films/',
      name ? {params: this.createMovieNameParam(name)} : undefined
    ).pipe(
      map(value => {
          return value.results.map(value1 => {
              return {
                url: value1.url,
                title: value1.title,
                director: value1.director,
                releaseDate: value1.release_date
              };
            }
          );
        }
      ));
  }

  private createMovieNameParam(name: string): HttpParams {
    return new HttpParams().set('search', name);
  }
}
