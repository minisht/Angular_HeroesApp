/**
 * Created by MTera on 6/1/2017.
 */
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component(
  {
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
  }
)

export class HeroDetailComponent {
  @Input() hero: Hero;
}
