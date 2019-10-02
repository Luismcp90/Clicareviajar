import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortoComponent } from './porto/porto.component';
import { BragaComponent } from './braga/braga.component';
import { GuimaraesComponent } from './guimaraes/guimaraes.component';
import { CapaComponent } from './Paginainicial/capa.component';
import { FormularioComponent } from './Formulário/formulario.component';
import { PrimeiraRotaBragaComponent } from './primeira-rota-braga/primeira-rota-braga.component';
import { SegundaRotaBragaComponent } from './segunda-rota-braga/segunda-rota-braga.component';
import { TerceiraRotaBragaComponent } from './terceira-rota-braga/terceira-rota-braga.component';
import { PrimeiraRotaPortoComponent } from './primeira-rota-porto/primeira-rota-porto.component';
import { SegundaRotaPortoComponent } from './segunda-rota-porto/segunda-rota-porto.component';
import { TerceiraRotaPortoComponent } from './terceira-rota-porto/terceira-rota-porto.component';
import { PrimeiraRotaGuimaraesComponent } from './primeira-rota-guimaraes/primeira-rota-guimaraes.component';
import { SegundaaRotaGuimaraesComponent } from './segundaa-rota-guimaraes/segundaa-rota-guimaraes.component';
import { TerceiraRotaGuimaraesComponent } from './terceira-rota-guimaraes/terceira-rota-guimaraes.component';


const routes: Routes = [
  {path: 'capa', component: CapaComponent },
  {path: 'formulario', component: FormularioComponent },
  {path: 'porto', component: PortoComponent},
  {path: 'braga', component: BragaComponent},
  {path: 'guimaraes', component: GuimaraesComponent},
  {path: 'primeira-rota-braga', component: PrimeiraRotaBragaComponent},
  {path: 'segunda-rota-braga', component: SegundaRotaBragaComponent},
  {path: 'terceira-rota-braga', component: TerceiraRotaBragaComponent},
  {path: 'primeira-rota-porto', component: PrimeiraRotaPortoComponent},
  {path: 'segunda-rota-porto', component: SegundaRotaPortoComponent},
  {path: 'terceira-rota-porto', component: TerceiraRotaPortoComponent},
  {path: 'primeira-rota-guimaraes', component: PrimeiraRotaGuimaraesComponent},
  {path: 'segundaa-rota-guimaraes', component: SegundaaRotaGuimaraesComponent},
  {path: 'terceira-rota-guimaraes', component: TerceiraRotaGuimaraesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
