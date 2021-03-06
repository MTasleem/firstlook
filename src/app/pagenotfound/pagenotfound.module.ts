import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ]
})
export class PagenotfoundModule { }
