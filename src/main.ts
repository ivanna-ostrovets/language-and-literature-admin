import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import * as PouchDB from 'pouchdb';

import { AppModule } from './app/app.module';

import './styles/theme.scss';
import './styles/main.scss';

if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  // PouchDB.debug.enable('*');
  PouchDB.debug.disable();
}

platformBrowserDynamic().bootstrapModule(AppModule);
