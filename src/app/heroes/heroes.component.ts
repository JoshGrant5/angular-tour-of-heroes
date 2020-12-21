import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// Component decorator specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // Location of component's template file
  styleUrls: ['./heroes.component.scss'] // Location of component's private CSS/SCSS
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  constructor() { }

  // Lifecycle hook - called shortly after component creation, so a good place to put initialization logic
  ngOnInit(): void {
  }

}
