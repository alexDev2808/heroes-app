import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseURL: string = environments.baseURL;

  constructor( private http: HttpClient ) { 

  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseURL }/heroes`);
  }

  getHeroById( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`)
      .pipe(
        catchError( error => of( undefined )) // of(undefined) Observable para undefined 
      )
  }

  getSuggestions( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes?q=${query}&_limit=6`)
  }

  addHero( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseURL }/heroes`, hero );
  }

  updateHero( hero: Hero ): Observable<Hero> {
    if( !hero.id ) throw new Error('Hero ID is required!')
    return this.http.patch<Hero>(`${ this.baseURL }/heroes/${ hero.id }`, hero );
  }

  deleteHero( hero: Hero ): Observable<boolean> {
    
    return this.http.delete(`${ this.baseURL }/heroes/${ hero.id }`)
            .pipe(
              catchError( err => of(false)),
              map( resp => true)
            )
  }
  
}
