import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Retrogame } from '../../retrogame.model';

@Component({
  selector: 'app-retrogames-item',
  templateUrl: './retrogames-item.component.html',
  styleUrls: ['./retrogames-item.component.css']
})
export class RetrogamesItemComponent  {
 @Input() retrogames: Retrogame;
 @Output() retrogameSelected = new EventEmitter<void>();


 onSelected() {
   this.retrogameSelected.emit()
 }

}
