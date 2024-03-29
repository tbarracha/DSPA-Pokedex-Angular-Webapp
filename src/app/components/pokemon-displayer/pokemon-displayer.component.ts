// pokemon-displayer.component.ts
import { Component } from '@angular/core';
import { PageName } from 'src/app/enums/PageName';
import { Pokemon } from 'src/app/classes/pokemon';

// services
import { EventManagerService } from 'src/app/services/event-manager.service';

@Component({
  selector: 'app-pokemon-displayer',
  templateUrl: './pokemon-displayer.component.html',
  styleUrls: ['./pokemon-displayer.component.scss']
})

export class PokemonDisplayerComponent {
  pokemon: Pokemon | undefined;

  constructor( private eventManager: EventManagerService)  {
    eventManager.pokemonSelected.subscribe(this.setPokemon.bind(this));
  }

  setPokemon(pokemon: Pokemon) {
    if (pokemon == null) {
      return;
    }

    this.pokemon = pokemon;
  }

  toCreditsPage() {
    this.eventManager.toPage.emit(PageName.Credits);
  }

  searchType(tag: string) {
    console.log("Searching for tag: " + tag);
    this.eventManager.searchQuery.emit(tag);
  }
}
