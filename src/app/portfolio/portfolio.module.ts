import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports:[ CommonModule, PortfolioRoutingModule ],
  exports:[],
  declarations:[ PortfolioComponent ],
  providers:[]
})

export class PortfolioModule {}
