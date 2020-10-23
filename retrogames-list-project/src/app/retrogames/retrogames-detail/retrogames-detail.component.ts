import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Retrogame } from '../retrogame.model';
import { RetrogameService } from '../retrogames.service';

@Component({
  selector: 'app-retrogames-detail',
  templateUrl: './retrogames-detail.component.html',
  styleUrls: ['./retrogames-detail.component.css']
})
export class RetrogamesDetailComponent  {
 @Input() retrogame: Retrogame;

constructor(private retrogameService: RetrogameService) {}

 onAddToShoppingList(){
  this.retrogameService.addGameInfoToShoppingList(this.retrogame.info);
}

}
