import { Component }  from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
	selector: 'toolbar-movies',
	styleUrls: [ './toolbar-movies.component.css' ],
  	templateUrl: './toolbar-movies.component.html'
})

export class ToolbarMovies {

	private movies: any[];

	constructor(private tmdb: TmdbService) {}

	ngOnInit() {

	}
}