import { Subject } from 'rxjs';
import { GameInfo } from '../shared/info.model';

export class ShoppingListService {
  gameInfoChanged = new Subject<GameInfo[]>();
  private info: GameInfo[] = [
    new GameInfo('Yar\'s Revenge', 'May 1982', 'Multidirectional shooter', 'Atari, Inc.', 2),
    new GameInfo('Pacman', 'February 1981', 'Maze game', 'Midway Games', 4)
  ];

  getGameInfo() {
    return this.info.slice();
  }

  addGameInfo(info: GameInfo) {
    this.info.push(info);
    this.gameInfoChanged.next(this.info.slice());
  }
  addGamesInfo(info: GameInfo[]) {
    //   for (let gameInfo of info ) {
    //     this.addGameInfo(gameInfo)
    //   }
    this.info.push(...info);
    this.gameInfoChanged.next(this.info.slice());
  }

}
