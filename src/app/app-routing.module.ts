import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about-me', loadChildren: 'app/about-me/about-me.module#AboutMeModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
