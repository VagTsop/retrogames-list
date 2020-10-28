import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
            private route: ActivatedRoute) {
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

}
