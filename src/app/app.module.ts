import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { FormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './components/update-joueur/update-joueur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParEquipeComponent } from './components/recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './components/recherche-par-nom/recherche-par-nom.component';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeEquipesComponent } from './components/liste-equipes/liste-equipes.component';
import { UpdateEquipeComponent } from './components/update-equipe/update-equipe.component';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParEquipeComponent,
    RechercheParNomComponent,
    SearchfilterPipe,
    ListeEquipesComponent,
    UpdateEquipeComponent,
    LoginComponent,
    ForbiddenComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
