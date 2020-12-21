import { Component, OnInit } from '@angular/core';

// Component decorator specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // Location of component's template file
  styleUrls: ['./heroes.component.scss'] // Location of component's private CSS/SCSS
})
export class HeroesComponent implements OnInit {

  constructor() { }

  // Lifecycle hook - called shortly after component creation, so a good place to put initialization logic
  ngOnInit(): void {
  }

  hero = 'Windstorm';

}
