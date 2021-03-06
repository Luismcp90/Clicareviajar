import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapaComponent } from './Paginainicial/capa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BragaComponent } from './braga/braga.component';
import { PortoComponent } from './porto/porto.component';
import { GuimaraesComponent } from './guimaraes/guimaraes.component';
import { FormularioComponent } from './Formulário/formulario.component';
import { PrimeiraRotaBragaComponent } from './primeira-rota-braga/primeira-rota-braga.component';
import { SegundaRotaBragaComponent } from './segunda-rota-braga/segunda-rota-braga.component';
import { TerceiraRotaBragaComponent } from './terceira-rota-braga/terceira-rota-braga.component';
import { PrimeiraRotaPortoComponent } from './primeira-rota-porto/primeira-rota-porto.component';
import { SegundaRotaPortoComponent } from './segunda-rota-porto/segunda-rota-porto.component';
import { TerceiraRotaPortoComponent } from './terceira-rota-porto/terceira-rota-porto.component';
import { PrimeiraRotaGuimaraesComponent } from './primeira-rota-guimaraes/primeira-rota-guimaraes.component';
import { TerceiraRotaGuimaraesComponent } from './terceira-rota-guimaraes/terceira-rota-guimaraes.component';
import { SegundaRotaGuimaraesComponent } from './segunda-rota-guimaraes/segunda-rota-guimaraes.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CapaComponent,
    NavBarComponent,
    BragaComponent,
    PortoComponent,
    GuimaraesComponent,
    FormularioComponent,
    PrimeiraRotaBragaComponent,
    SegundaRotaBragaComponent,
    TerceiraRotaBragaComponent,
    PrimeiraRotaPortoComponent,
    SegundaRotaPortoComponent,
    TerceiraRotaPortoComponent,
    PrimeiraRotaGuimaraesComponent,
    SegundaRotaGuimaraesComponent,
    TerceiraRotaGuimaraesComponent,
    SobrenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVg5HeWmpn10As1f8B4bLmspTOlkn-a58'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
