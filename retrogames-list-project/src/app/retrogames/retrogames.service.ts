import { EventEmitter } from '@angular/core';
import { Retrogame } from './retrogame.model';

export class RetrogameService {
 retrogameSelected = new EventEmitter<Retrogame>();

 private retrogames: Retrogame[] = [
    new Retrogame('Yar\'s Revenge', 'The player controls an insect-like creature called a Yar who must nibble or shoot through a barrier in order to fire his Zorlon Cannon into the breach. The objective is to destroy the evil Qotile, which exists on the other side of the barrier. ... If the cannon blast hits a piece of the shield or misses, it is expended.', 'https://www.cashconverters.com.au/globalassets/Catalogs/3a6e3cf5-c9d4-49fa-93de-aa7b00857802.jpg'),
    new Retrogame('Ms. Pacman', 'It is the sequel to Pac-Man (1980), and the first entry in the series to not be made by Namco. Controlling the titular character, the player is tasked with eating all of the pellets in an enclosed maze while avoiding four colored ghosts.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBi4mdLKLHVFz-sT3x5Egk9255JY_0fqgPhw&usqp=CAU')
  ];

  getRetrogames() {
   return this.retrogames.slice();
  }
}
