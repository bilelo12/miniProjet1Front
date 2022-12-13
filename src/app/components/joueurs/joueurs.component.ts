import { Component, OnInit } from '@angular/core';
import { joueur } from 'src/app/model/joueur';
import { AuthService } from 'src/app/services/auth.service';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  
  joueurs! : joueur[];
  constructor(private joueurService : JoueurService ,public authService :AuthService ) { 
      //this.joueurs = joueurService.listeJoueurs();
  }

  ngOnInit(): void {
    this.chargerJoueurs();
  }
  chargerJoueurs(){
    this.joueurService.listeJoueurs().subscribe(jou=>{
      console.log(jou);
      this.joueurs=jou;
    })

}
  supprimerJoueur(jou:joueur){
    //let conf = confirm("vous etes sur ?")
    console.log(jou.id)
    this.joueurService.supprimerJoueur(jou.id!).subscribe(jou=>{
      window.alert("joueur supprimer")
    })
    this.chargerJoueurs(); 
  }

}
