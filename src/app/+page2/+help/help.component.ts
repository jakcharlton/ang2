import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

import { Hero, HeroService } from './../../hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.css'],
  providers: [HeroService]
})
export class HelpComponent implements OnInit {
  selectedId: number;
  heroes: Hero[];

  constructor(private service: HeroService, private router: Router) { }

  routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
    this.selectedId = +curr.getParam('id');
    this.service.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
  }

}
