import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Retrogame } from '../retrogame.model';
import { RetrogameService } from '../retrogames.service';

@Component({
  selector: 'app-retrogames-detail',
  templateUrl: './retrogames-detail.component.html',
  styleUrls: ['./retrogames-detail.component.css']
})
export class RetrogamesDetailComponent  {
retrogame: Retrogame;
id: number;

constructor(private retrogameService: RetrogameService,
            private route: ActivatedRoute,
            private router: Router) {
}

ngOnInit(){
   this.route.params
   .subscribe(
     (params: Params) => {
      this.id = +params['id'];
      this.retrogame = this.retrogameService.getRetrogame(this.id);
     }
   );
}


 onAddToShoppingList(){
  this.retrogameService.addGameInfoToShoppingList(this.retrogame.info);
}

onEditRecipe() {
  this.router.navigate(['edit'], {relativeTo: this.route});
//this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
}

}
