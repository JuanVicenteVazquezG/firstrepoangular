import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})

export class MyComponent{
  constructor(){
    console.log('My Component Loaded');
  }
}
