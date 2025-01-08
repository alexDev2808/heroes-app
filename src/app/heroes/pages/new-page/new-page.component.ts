import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HeroImagePipe
  ],
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
  ]

  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
   ) {}

  ngOnInit(): void {   
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById( id ))
      ).subscribe( hero => {
        if( !hero ) return this.router.navigateByUrl('/');

        this.heroForm.reset( hero );
        return;
      })
  }

  get currentHero(): Hero {
    const hero =  this.heroForm.value as Hero;
    return hero;
  }

  onSubmit() {
    if( this.heroForm.invalid ) return;

    if( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`${hero.superhero} updated!`);

        });

        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // this.router.navigate(['/heroes/edit', hero.id])
        this.router.navigate(['/heroes/list'])
        this.showSnackbar(`${hero.superhero} created!`);
      });
    
  }

  showSnackbar( message: string ): void {
    this.snackbar.open( message, 'Hecho', {
      duration: 2500,
    })
  }
}
