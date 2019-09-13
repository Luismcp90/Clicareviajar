import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapaComponent } from './capa/capa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BragaComponent } from './braga/braga.component';
import { PortoComponent } from './porto/porto.component';
import { GuimaraesComponent } from './guimaraes/guimaraes.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CapaComponent,
    NavBarComponent,
    BragaComponent,
    PortoComponent,
    GuimaraesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
