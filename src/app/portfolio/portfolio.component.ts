import { Component, OnInit } from '@angular/core';

import { PortProj } from './port-proj';

import { PortProjService } from './port-proj.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls:['portfolio.component.css']
})


export class PortfolioComponent implements OnInit {

  portProjs: PortProj[];

  constructor(
    private PortProjService: PortProjService
  ) {}

  ngOnInit() {
    this.getPortProjs();
  }

  getPortProjs(): void {
    this.PortProjService.getPortProjs()
      .subscribe(portProjs => this.portProjs = portProjs)
  }

}
