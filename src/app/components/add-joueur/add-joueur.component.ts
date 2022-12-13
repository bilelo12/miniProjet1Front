import { Component, OnInit } from '@angular/core';
import { joueur } from 'src/app/model/joueur';
import { JoueurService } from 'src/app/services/joueur.service';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  newJoueur = new joueur();
  equipes!:Equipe[];
  newIdEquipe!:number ;
  newEquipe!:Equipe;
  constructor(private joueurService : JoueurService,private router:Router) { }

  ngOnInit(): void {
    this.joueurService.listeEquipes().subscribe(equ=>{
      this.equipes=equ._embedded.equipes;
      console.log(equ)
    })
  }
  addJoueur(){
    //console.log(this.newIdEquipe)

    this.newJoueur.equipe=this.equipes.find(equ=>equ.idEquipe==this.newIdEquipe)!;
    //this.newJoueur.equipe=this.newEquipe;
    //console.log(this.newEquipe);
    this.joueurService.ajouterJoueur(this.newJoueur).subscribe(jou=>{
    console.log(this.newJoueur);
      this.router.navigate(['joueurs'])

    })
  }

}
