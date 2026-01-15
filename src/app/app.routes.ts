import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero-page-component/hero-page-component';
import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { DragonballSuperPageComponent } from './pages/dragonball-page-super/dragonball-super-page';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonballsuper',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
  ];
