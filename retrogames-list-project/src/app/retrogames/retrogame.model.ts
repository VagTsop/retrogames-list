import { GameInfo } from '../shared/info.model';

export class Retrogame {
  public name: string;
  public description: string;
  public imagePath: string;
  public info: GameInfo[];

  constructor(name: string, desc: string, imagePath: string, info: GameInfo[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.info = info;
  }
}
