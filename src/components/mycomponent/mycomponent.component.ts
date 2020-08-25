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


  constructor() {
    this.title = 'The proof with components';
    this.comment = 'This is only a simple comment';
    this.year = 2020;

    console.log('My Component Loaded');
  }
}
