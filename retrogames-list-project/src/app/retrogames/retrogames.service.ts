import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GameInfo } from '../shared/info.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Retrogame } from './retrogame.model';

@Injectable()
export class RetrogameService {
 retrogameSelected = new EventEmitter<Retrogame>();

 private retrogames: Retrogame[] = [
    new Retrogame(
      'Yar\'s Revenge',
      'The player controls an insect-like creature called a Yar who must nibble or shoot through a barrier in order to fire his Zorlon Cannon into the breach. The objective is to destroy the evil Qotile, which exists on the other side of the barrier. ... If the cannon blast hits a piece of the shield or misses, it is expended.',
      'https://www.cashconverters.com.au/globalassets/Catalogs/3a6e3cf5-c9d4-49fa-93de-aa7b00857802.jpg',
      [
        new GameInfo('Yar\'s Revenge', '1982', 'Shooter',  'Mikamoto', 2),
        new GameInfo('Yar\'s Revenge Special Edition', '1985', 'Shooter',  'Mikamoto', 8)
      ]),
    new Retrogame(
      'Ms. Pacman',
      'It is the sequel to Pac-Man (1980), and the first entry in the series to not be made by Namco. Controlling the titular character, the player is tasked with eating all of the pellets in an enclosed maze while avoiding four colored ghosts.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBi4mdLKLHVFz-sT3x5Egk9255JY_0fqgPhw&usqp=CAU',
     [
      new GameInfo('Ms. Pacman', '1981', 'Maze', 'Iwatani', 2),
      new GameInfo('Ms. Pacman: Special Edition', '1982', 'Maze',  'Iwatani', 2)
     ])

    ];

  constructor(private slService: ShoppingListService) {}

  getRetrogames() {
   return this.retrogames.slice();
  }

  addGameInfoToShoppingList(info: GameInfo[]) {
    this.slService.addGamesInfo(info);
  }

}
