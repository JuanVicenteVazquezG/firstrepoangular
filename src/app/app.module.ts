import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from '../components/mycomponent/mycomponent.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { ProofsComponent } from '../components/proofs/proofs.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MoviesComponent,
    ProofsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
