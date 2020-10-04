import { Component } from '@angular/core';
import { GameInfo } from '../shared/info.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  info: GameInfo[] = [
    new GameInfo('Yar\'s Revenge', 'May 1982', 'Multidirectional shooter', 'Atari, Inc.', 2),
    new GameInfo('Pacman', 'February 1981', 'Maze game', 'Midway Games', 4)
  ] ;

  onInfoAdded(gameInfo: GameInfo): void  {
    this.info.push(gameInfo);
  }

}
