import { Component, OnInit } from '@angular/core';
import { joueur } from 'src/app/model/joueur';
import { ActivatedRoute,Router } from '@angular/router';
import { JoueurService } from 'src/app/services/joueur.service';
import { Equipe } from 'src/app/model/equipe';
import { equipeWrapper } from 'src/app/model/equipWrapper';
@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [
  ]
})
export class UpdateJoueurComponent implements OnInit {

  equipes! :Equipe[];
  updatedEquId!:number ;
  currentJoueur = new joueur(); 
  constructor(private router:Router,private activeRoute : ActivatedRoute, private joueurService:JoueurService) { }

  ngOnInit(): void {
    
    this.joueurService.listeEquipes().subscribe(equ=>{
      console.log(equ._embedded.equipes)
      this.equipes=equ._embedded.equipes;
    })
    this.joueurService.consulterJoueur(this.activeRoute.snapshot.params['id']).subscribe(jou=>{
      console.log(jou);
      this.currentJoueur=jou
      this.updatedEquId=this.currentJoueur.equipe.idEquipe;
    })
    //this.updatedEquId=this.currentJoueur.equipe.idEquipe;
    console.log(this.currentJoueur)
  }
  updateJoueur(){
    this.currentJoueur.equipe=this.equipes.find(equ=>equ.idEquipe==this.updatedEquId)!;
    this.joueurService.updateJoueur(this.currentJoueur).subscribe(jou=>{
    this.router.navigate(['joueurs'])

    })
  }

}
