import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MapsModule, MarkerService, LegendService, MapsTooltipService } from '@syncfusion/ej2-angular-maps';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule
  ],
  providers: [LegendService, MarkerService, MapsModule, MapsTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
