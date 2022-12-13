import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';
import { JoueurService } from 'src/app/services/joueur.service';
@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
  styles: [
  ]
})
export class ListeEquipesComponent implements OnInit {
  equipes !:Equipe[];
  ajout:boolean=true;
  updatedEquipe :Equipe={idEquipe:0,nomEquipe:""};
  constructor(private joueurService : JoueurService ) { }

  ngOnInit(): void {
    this.joueurService.listeEquipes()
    .subscribe(equ=>this.equipes=equ._embedded.equipes);
  }

  equipeUpdated(equ :Equipe){
    this.joueurService.ajouterEquipe(equ)
    .subscribe(()=>this.chargerEquipe())

  }
  chargerEquipe(){
    this.joueurService.listeEquipes()
    .subscribe(equ=>this.equipes=equ._embedded.equipes)
  }
  updateEquipe(equ:Equipe){
    this.updatedEquipe=equ;
    this.ajout=false;
  }

}
