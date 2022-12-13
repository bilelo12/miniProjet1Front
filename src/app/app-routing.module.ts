import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { JoueursComponent } from './components/joueurs/joueurs.component';
import { ListeEquipesComponent } from './components/liste-equipes/liste-equipes.component';
import { LoginComponent } from './components/login/login.component';
import { RechercheParEquipeComponent  } from './components/recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './components/recherche-par-nom/recherche-par-nom.component';
import { UpdateJoueurComponent } from './components/update-joueur/update-joueur.component';
import { JoueurGuard } from './guards/joueur.guard';
const routes: Routes = [
  {path: "joueurs",component: JoueursComponent},
  {path: "add-joueur",component: AddJoueurComponent,canActivate:[JoueurGuard]},
  { path: "update-Joueur/:id", component: UpdateJoueurComponent },
  { path: "rechercheParEquipe", component: RechercheParEquipeComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "liste-equipes", component: ListeEquipesComponent },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "joueurs", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
