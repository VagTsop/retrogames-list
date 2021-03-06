import { ViewChild } from '@angular/core';
import { Component, ElementRef } from '@angular/core';
import { GameInfo } from '../../shared/info.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('releaseDateInput', { static: true }) releaseDateInputRef: ElementRef;
  @ViewChild('genreInput', { static: true }) genreInputRef: ElementRef;
  @ViewChild('developerInput', { static: true }) developerInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  onAddItem(): void {
    const infoName = this.nameInputRef.nativeElement.value;
    const infoReleaseDate = this.releaseDateInputRef.nativeElement.value;
    const infoGenre = this.genreInputRef.nativeElement.value;
    const infoDeveloper = this.developerInputRef.nativeElement.value;
    const infoAmount = this.amountInputRef.nativeElement.value;
    const newGameInfo = new GameInfo(infoName, infoReleaseDate, infoGenre, infoDeveloper, infoAmount);
    this.slService.addGameInfo(newGameInfo);
  }


}
