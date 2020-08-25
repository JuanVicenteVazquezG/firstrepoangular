import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;

  constructor() {
    console.log('First line executed!');
    this.title = 'Movie component!';
  }

  //  First method executed after Constructor, is required not to put logical in the Constructor, better use ngOnInit
  ngOnInit() {
    console.log('Hello my Friend, component loaded');
  }

  ngDoCheck() {
    console.log('Do check executed!');
  }

  ngOnDestroy() {
    console.log('ComponentDetroyed!!');
  }

  changeTitle() {
    if (this.title === "This is other title when You press the button") {
      this.title = 'Movie component!';
    }
    else {
      this.title = 'This is other title when You press the button';
    }
  }
}
