import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CharacterService } from './character.service';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './character/character.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CharacterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CharacterService]
})
export class AppModule { }
