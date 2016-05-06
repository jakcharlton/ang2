import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['help.component.css']
})
export class HelpComponent implements OnInit {
  selectedId: number;

  constructor(private router: Router) { }

  routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
    this.selectedId = +curr.getParam('id');
  }

  ngOnInit() {
  }

}
