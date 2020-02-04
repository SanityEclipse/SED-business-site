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
    loadChildren: () => import('app/about-me/about-me.module').then(m => m.AboutMeModule),
    data: {
      animation: 'about-me'
    }
  },
  {
    path: 'resume',
    loadChildren: () => import('app/resume/resume.module').then(m => m.ResumeModule),
    data: {
      animation: 'resume'
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('app/contact/contact.module').then(m => m.ContactModule),
    data: {
      animation: 'contact'
    }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('app/portfolio/portfolio.module').then(m => m.PortfolioModule),
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
