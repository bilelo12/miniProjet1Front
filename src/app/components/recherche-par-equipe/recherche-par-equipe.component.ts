import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { joueur } from 'src/app/model/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styles: [
  ]
})
export class RechercheParEquipeComponent implements OnInit {
  equipes!:Equipe[]
  IdEquipe!:number ;
  joueurs! :joueur[];

  constructor( private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.listeEquipes().subscribe(equ=>{
      console.log(equ._embedded.equipes)
      this.equipes=equ._embedded.equipes;
  });

  /*onChange(){
      this.joueurService.rechercherParCategorie(this.IdEquipe)
      .subscribe(jou => {this.joueurs =jou})
  }*/


}
}