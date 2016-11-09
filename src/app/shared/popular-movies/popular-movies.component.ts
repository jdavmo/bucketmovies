import { Component }  from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
	selector: 'popular-movies',
	styleUrls: [ './popular-movies.component.css' ],
  	templateUrl: './popular-movies.component.html'
})

export class PopularMovies {

	private movies: any[];

	constructor(private tmdb: TmdbService) {}

	ngOnInit() {
		this.tmdb.tmdbGet('/movie/popular', '&language=en-US')
		.subscribe((result) => {
			if (result) {
				this.movies = result.results;
			}
		});
	}
}