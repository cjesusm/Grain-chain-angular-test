import { Component, OnInit } from '@angular/core';
import {CharacterService} from './character.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public results = Array.from([]);
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getCharacters().subscribe(response => {
      if(response) {
        const { results } = response;
        this.results = results;
        console.log(this.results)
      }
    })
  }
  
}
