import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../shared/info.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  {

  info: GameInfo[] ;

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit() {
   this.info = this.slService.getGameInfo();
  }

 

}
