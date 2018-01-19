import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './portfolio.component';

import { PortProjService } from './port-proj.service';

@NgModule({
  imports:[ CommonModule, PortfolioRoutingModule ],
  exports:[],
  declarations:[ PortfolioComponent ],
  providers:[ PortProjService ]
})

export class PortfolioModule {}
