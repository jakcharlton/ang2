import { Component, OnInit } from '@angular/core';
import { PageComponent } from './+page';
import { Page2Component } from './+page2';


import { Routes , ROUTER_DIRECTIVES, OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'testng-app',
  templateUrl: 'testng.component.html',
  styleUrls: ['testng.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/page', component: PageComponent },
    { path: '/page2', component: Page2Component }
  ])
export class TestngAppComponent implements OnInit {

  title: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'testng works!';
  }
}
