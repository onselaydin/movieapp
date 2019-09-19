import { Component } from '@angular/core';
import { Movie } from '../movie';
//import {Movies} from '../movie.datasource';
import { MovieService } from '../movie.service';

@Component({
    selector:'movies',
    //template:'<h2>Movies</h2>'
    templateUrl:'movies.component.html',
    styleUrls:['movies.component.css']
    
})
export class MoviesComponent {
    title = 'Movie List';
    //movie: Movie ={
    //    id:1,
    //    name:'Testere'
    //}

    //getTitle(){
    //    return this.title;
    //}

    //movies = ['testere','çakallarla dans','terminatör','robocob']
    movies: Movie[];
    selectedMovie:Movie;

    constructor(private movieService:MovieService){} //injektör

    ngOnInit(): void {
        this.getMovies();
        
    }

    onSelect(movie:Movie):void{
        this.selectedMovie = movie;
    }

    getMovies():void {
        //this.movies = this.movieService.getMovies();

        this.movieService.getMovies()
            .subscribe(movies=> {
                this.movies=movies;
        });
    }
    
}