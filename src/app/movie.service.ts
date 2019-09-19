import { Injectable } from '@angular/core';
import { Movie } from './movie'
import { Movies } from './movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = 'api/movies';

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
    ) { }

  /*
  getMovies():Movie[] {
    return Movies;
  }
*/

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    //return of(Movies);
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id): Observable<Movie> {
    this.loggingService.add('MovieService: get detail by id='+id)
    //return of(Movies.find(movie=>movie.id === id));
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }

}
