import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrogameEditComponent } from './retrogames/retrogame-edit/retrogame-edit.component';
import { RetrogameStartComponent } from './retrogames/retrogame-start/retrogame-start.component';
import { RetrogamesDetailComponent } from './retrogames/retrogames-detail/retrogames-detail.component';
import { RetrogamesComponent } from './retrogames/retrogames.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/retrogames', pathMatch: 'full' },
  {
    path: 'retrogames', component: RetrogamesComponent, children: [
      { path: '', component: RetrogameStartComponent },
      { path: 'new', component: RetrogameEditComponent },
      { path: ':id', component: RetrogamesDetailComponent },
      { path: ':id/edit', component: RetrogameEditComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}

