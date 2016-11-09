import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TmdbService {

	private loggedIn = false;
	private api 	 = 'https://api.themoviedb.org';
	private ver 	 = '3';
	private api_key  = '9127c87e706088b1b33c0d29bcb2db09';

	constructor(private http: Http) {}

	tmdbGet(url: string, params: string): any{

		let headers = new Headers();

		return this.http
			.get(
				this.api+'/'+this.ver+url+'?api_key='+this.api_key+params,
				{ headers }
			)
			.map(res => res.json())
			.map((res) => {
				return res;
			});
	};

};
