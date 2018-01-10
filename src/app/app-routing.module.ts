import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full',
    data: {
      animation: 'resume'
    }
  },
  {
    path: 'about-me',
    loadChildren: 'app/about-me/about-me.module#AboutMeModule',
    data: {
      animation: 'about-me'
    }
  },
  {
    path: 'resume',
    loadChildren: 'app/resume/resume.module#ResumeModule',
    data: {
      animation: 'resume'
    }
  },
  {
    path: 'contact',
    loadChildren: 'app/contact/contact.module#ContactModule',
    data: {
      animation: 'contact'
    }
  },
  {
    path: 'portfolio',
    loadChildren: 'app/portfolio/portfolio.module#PortfolioModule',
    data: {
      animation: 'portfolio'
    }
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
