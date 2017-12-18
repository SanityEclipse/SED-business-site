import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

const routes:Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full'},
  { path: 'about-me',    component: AboutMeComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutMeRoutingModule {}
