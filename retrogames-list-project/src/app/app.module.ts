import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RetrogamesComponent } from './retrogames/retrogames.component';
import { RetrogamesListComponent } from './retrogames/retrogames-list/retrogames-list.component';
import { RetrogamesDetailComponent } from './retrogames/retrogames-detail/retrogames-detail.component';
import { RetrogamesItemComponent } from './retrogames/retrogames-list/retrogames-item/retrogames-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RetrogamesComponent,
    RetrogamesListComponent,
    RetrogamesDetailComponent,
    RetrogamesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
