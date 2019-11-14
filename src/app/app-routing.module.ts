import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CpuLasthourComponent } from './cpu/cpu-lasthour/cpu-lasthour.component';
import { CpuLastminuteComponent } from './cpu/cpu-lastminute/cpu-lastminute.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'cpu-lasthour', component: CpuLasthourComponent},
  {path:'cpu-lastminute', component: CpuLastminuteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
