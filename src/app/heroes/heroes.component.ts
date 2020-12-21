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

  heroes!: Hero[];
  selectedHero!: Hero;

  // Define a prive heroService and identify it as a HeroService injection site
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // Lifecycle hook - called shortly after component creation, so a good place to put initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
