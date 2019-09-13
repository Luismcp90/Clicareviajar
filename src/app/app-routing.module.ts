import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortoComponent } from './porto/porto.component';
import { BragaComponent } from './braga/braga.component';
import { GuimaraesComponent } from './guimaraes/guimaraes.component';
import { CapaComponent } from './capa/capa.component';


const routes: Routes = [
  {path : 'home', component : CapaComponent},
  {path : 'porto', component : PortoComponent},
  {path : 'braga', component : BragaComponent},
  {path : 'guimaraes', component : GuimaraesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
