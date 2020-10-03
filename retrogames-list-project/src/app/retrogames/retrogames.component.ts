import { Component } from '@angular/core';
import { Retrogame } from './retrogame.model';

@Component({
  selector: 'app-retrogames',
  templateUrl: './retrogames.component.html',
  styleUrls: ['./retrogames.component.css']
})
export class RetrogamesComponent  {
selectedRetrogame: Retrogame;


}
