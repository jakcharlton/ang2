import { Component } from '@angular/core';
import { PageComponent } from './+page';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { Page2Component } from './+page2';


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
export class TestngAppComponent {
  title = 'testng works!';
}
