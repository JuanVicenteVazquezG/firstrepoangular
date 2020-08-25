import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})

export class MyComponent {
  public title: string;
  public comment: string;
  public year: number;
  public showMovies: boolean;

  constructor() {
    this.title = 'The proof with components';
    this.comment = 'This is only a simple comment';
    this.year = 2020;
    this.showMovies = true;
    console.log('My Component Loaded');
  }

  hideComponent(): any {
    this.showMovies = !this.showMovies;
  }
}
