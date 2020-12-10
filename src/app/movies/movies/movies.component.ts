import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  genreId:number | undefined;
  movies:Movie[] | undefined;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p=>{
        this.genreId = +p.get('id');
        this.movieService.getMovieByGenre(this.genreId).subscribe(
         (m)=>{
            this.movies = m;
            console.log(m);
          }
        )
      }
    )
  }

}
