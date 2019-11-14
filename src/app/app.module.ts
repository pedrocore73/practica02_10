import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CpuLasthourComponent } from './cpu/cpu-lasthour/cpu-lasthour.component';
import { CpuLastminuteComponent } from './cpu/cpu-lastminute/cpu-lastminute.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CpuLasthourComponent,
    CpuLastminuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
