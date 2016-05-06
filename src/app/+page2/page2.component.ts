import { Component, OnInit } from '@angular/core';
import { HelpComponent } from './+help';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/help', component: HelpComponent },
    {path: '/help/:id', component: HelpComponent }
  ])
export class Page2Component implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
