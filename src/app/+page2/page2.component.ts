import { Component, OnInit } from '@angular/core';
import { HelpComponent } from './+help';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { Help2Component } from './+help2';

@Component({
  moduleId: module.id,
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/help/:id', component: HelpComponent },
    { path: '/help', component: Help2Component }
  ])
export class Page2Component implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
