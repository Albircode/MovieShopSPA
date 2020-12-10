import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/models/Movie';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getTopRevenueMovie(): Observable<Movie[]>{
   return this.apiService.getAll('movies/toprevenue')
  }
  getMovieDetails(id:number):Observable<Movie>{

    return this.apiService.getOne('movies',id)

  }
}
