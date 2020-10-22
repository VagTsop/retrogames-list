import { EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Retrogame } from '../retrogame.model';
import { RetrogameService } from '../retrogames.service';

@Component({
  selector: 'app-retrogames-list',
  templateUrl: './retrogames-list.component.html',
  styleUrls: ['./retrogames-list.component.css']
})
export class RetrogamesListComponent implements OnInit {
  @Output() retrogameWasSelected = new EventEmitter<Retrogame>();
  retrogames: Retrogame[];

 constructor(private retrogameService: RetrogameService) {
 }

  ngOnInit() {
    this.retrogames = this.retrogameService.getRetrogames();
  }

  onRetrogameSelected(retrogame: Retrogame): void {
    this.retrogameWasSelected.emit(retrogame);
  }

}
