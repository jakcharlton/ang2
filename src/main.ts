import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TestngAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';

import {HTTP_PROVIDERS, Http} from '@angular/http';
import {AppState} from './app/app.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  AUTH_PROVIDERS
];

import * as moment_ from 'moment';
const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

if (environment.production) {
  enableProdMode();
}

bootstrap(TestngAppComponent, [ROUTER_PROVIDERS]);



// app.ts

