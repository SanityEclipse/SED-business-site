import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about-me', loadChildren: 'app/about-me/about-me.module#AboutMeModule' },
  { path: 'blog',     loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'contact',  loadChildren: 'app/contact/contact.module#ContactModule' }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
