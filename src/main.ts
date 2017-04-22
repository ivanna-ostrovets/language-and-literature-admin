import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

import './styles/main.scss';

const PouchDB = require('pouchdb');

if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  // PouchDB.debug.enable('*');
  PouchDB.debug.disable();
}

platformBrowserDynamic().bootstrapModule(AppModule);
