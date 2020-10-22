import { Component } from '@angular/core';
import { Retrogame } from './retrogame.model';
import { RetrogameService } from './retrogames.service';

@Component({
  selector: 'app-retrogames',
  templateUrl: './retrogames.component.html',
  styleUrls: ['./retrogames.component.css'],
  providers: [RetrogameService]
})
export class RetrogamesComponent  {
selectedRetrogame: Retrogame;


}
