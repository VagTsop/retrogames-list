import { Component, Input } from '@angular/core';
import { Retrogame } from '../../retrogame.model';
import { RetrogameService } from '../../retrogames.service';

@Component({
  selector: 'app-retrogames-item',
  templateUrl: './retrogames-item.component.html',
  styleUrls: ['./retrogames-item.component.css']
})
export class RetrogamesItemComponent  {
 @Input() retrogames: Retrogame;

constructor(private retrogameService: RetrogameService) {

}


 onSelected() {
  this.retrogameService.retrogameSelected.emit(this.retrogames);
 }

}
