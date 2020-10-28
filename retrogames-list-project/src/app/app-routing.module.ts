import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrogamesComponent } from './retrogames/retrogames.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/retrogames', pathMatch: 'full' },
  { path: 'retrogames', component: RetrogamesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

