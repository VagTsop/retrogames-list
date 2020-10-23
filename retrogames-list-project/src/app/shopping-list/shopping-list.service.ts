import { GameInfo } from '../shared/info.model';

export class ShoppingListService {
  private info: GameInfo[] = [
    new GameInfo('Yar\'s Revenge', 'May 1982', 'Multidirectional shooter', 'Atari, Inc.', 2),
    new GameInfo('Pacman', 'February 1981', 'Maze game', 'Midway Games', 4)
  ];

  getGameInfo() {
    return this.info.slice();
  }

  addGameInfo(info: GameInfo) {
    this.info.push(info);
  }

}
