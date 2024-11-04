import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { MaterialModule } from '../../../material/material.module';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'heroes-hero-card',
  standalone: true,
  imports: [MaterialModule, SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero property is required')
  }
}