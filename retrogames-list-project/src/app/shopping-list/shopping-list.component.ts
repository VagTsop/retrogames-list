import { Component } from '@angular/core';
import { gameInfo } from '../shared/info.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  info: gameInfo[] = [
    new gameInfo("Yar's Revenge", 'May 1982', "Multidirectional shooter", "Atari, Inc.", 2),
    new gameInfo('Pacman' ,'February 1981', "Maze game", "Midway Games", 4)
  ] ;
  

 
}
