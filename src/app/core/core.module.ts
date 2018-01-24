import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


//ngx-bootstrap
import { CollapseModule } from "../../../node_modules/ngx-bootstrap/collapse/collapse.module";


@NgModule({
  imports:      [ CommonModule, RouterModule, CollapseModule ],
  declarations: [ HeaderComponent, NavbarComponent, FooterComponent ],
  exports:      [ HeaderComponent, NavbarComponent, FooterComponent ],
  providers:    []
})


export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
