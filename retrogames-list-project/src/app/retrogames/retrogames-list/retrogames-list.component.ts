import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Retrogame } from '../retrogame.model';
import { RetrogameService } from '../retrogames.service';

@Component({
  selector: 'app-retrogames-list',
  templateUrl: './retrogames-list.component.html',
  styleUrls: ['./retrogames-list.component.css']
})
export class RetrogamesListComponent implements OnInit {
  retrogames: Retrogame[];

  constructor(private retrogameService: RetrogameService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.retrogames = this.retrogameService.getRetrogames();
  }

  onNewRetrogame() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
