import { Component }  from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
	selector: 'search-movies',
	styleUrls: [ './search-movies.component.css' ],
  	templateUrl: './search-movies.component.html'
})

export class SearchMovies {

	private movies: any[];

	constructor(private tmdb: TmdbService) {}

	ngOnInit() {

	}
}