import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Component decorator specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // Location of component's template file
  styleUrls: ['./heroes.component.scss'] // Location of component's private CSS/SCSS
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
