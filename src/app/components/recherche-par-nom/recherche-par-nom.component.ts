import { Component, OnInit } from '@angular/core';
import { joueur } from 'src/app/model/joueur';
import { JoueurService } from 'src/app/services/joueur.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  joueurs! :joueur[];
  nomJoueur !:string ;
  searchItem!:string;
  searchTerm !:string ;
  constructor(private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.listeJoueurs().subscribe(jou=>{
    this.joueurs=jou    
    });
  }
  /*
  rechercherJou() {
    this.joueurService.rechercheParNom(this.nomJoueur)
    .subscribe(jou=>this.joueurs=jou)
  }*/
  onKeyUp(filterText :string ){
  
  this.joueurs=this.joueurs.filter(joueur=>{
    joueur.nomJoueur?.toLocaleLowerCase().includes(filterText)});

}

}
