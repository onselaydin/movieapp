import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie

  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    //app-routing.module.ts deki id den... + işaretide string to int convert eder. 
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.movieService.getMovie(id)
        .subscribe(movie=>this.movie = movie);
      
  }

}
