import { Component } from '@angular/core';
import { CardApiService } from './card-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';


  /* ADD CardApiServive to providers in app.module.ts*/
  constructor(private cardapi: CardApiService) { }

  getDeck() {
    this.cardapi.getDeck(
      result => {
        console.log(result);
      }
    )
  }
}
