import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameInfo } from '../shared/info.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  info: GameInfo[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.info = this.slService.getGameInfo();
    this.slService.gameInfoChanged
      .subscribe(
        (info: GameInfo[]) => {
          this.info = info;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
