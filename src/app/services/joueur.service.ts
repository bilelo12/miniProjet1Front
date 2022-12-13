import { Injectable } from '@angular/core';
import { joueur } from '../model/joueur';
import { Equipe } from '../model/equipe';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { equipeWrapper } from '../model/equipWrapper';
import { apiUrl,apiUrlEqu } from '../config';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  //apiUrl :string = "http://localhost:8080/Devoir4/api";
  joueurs! :joueur[];
  //equipes! : Equipe[];
  joueur! :joueur;
  constructor(private http :HttpClient) {
    //this.equipes=[{idEquipe:1,nomEquipe:"psg"},{idEquipe:4,nomEquipe:"manutd"}]
    /*this.joueurs= [{idJoueur:1,nomJoueur:"Cristiano ronaldo",numeroJoueur:"30",equipe:{idEquipe:2,nomEquipe:"man utd"}},
    {idJoueur:2,nomJoueur:"lionel messi",numeroJoueur:"30",equipe:{idEquipe:1,nomEquipe:"psg"}},
    {idJoueur:3,nomJoueur:"lionel messi",numeroJoueur:"30",equipe:{idEquipe:1,nomEquipe:"psg"}},
    {idJoueur:4,nomJoueur:"Cristiano ronaldo",numeroJoueur:"30" ,equipe:{idEquipe:4,nomEquipe:"man utd"}}, 
  ];*/
   }
   listeJoueurs():Observable<joueur[]>{
    return this.http.get<joueur[]>(apiUrl);
   }
   ajouterJoueur(jou : joueur):Observable<joueur>{
    return this.http.post<joueur>(apiUrl,jou,httpOptions)
   }
   supprimerJoueur(id :number){
    const url  =`${apiUrl}/${id}`;
    return this.http.delete(url,httpOptions);
    /*const index = this.joueurs.indexOf(joueur,0);
    if(index > -1)this.joueurs.splice(index,1);*/
   }
   consulterJoueur(id:number):Observable< joueur>{
    const api =`${apiUrl}/${id}`;
    return  this.http.get<joueur>(api);
    }
    updateJoueur(j:joueur):Observable< joueur>{
      return this.http.put<joueur>(apiUrl,j,httpOptions);
      
    }
    trierJoueurs(){
      this.joueurs=this.joueurs.sort((j1,j2)=>{
        if(j1!.id!>j2!.id!){
          return 1
        }
        if(j1!.id!<j2!.id!){
          return -1
        }
        return 0
      })
    }
    //Equipes 
    listeEquipes():Observable<equipeWrapper>{
      const apiUrlEqu="http://localhost:8080/Devoir4/equ";
      return this.http.get<equipeWrapper>(apiUrlEqu);
    }
    /*consulterEquipe(id:number):Equipe{
      return this.equipes.find(equ=>equ.idEquipe==id)!;
    }*/
    rechercherParCategorie(idequ: number):Observable< joueur[]> {
      const url = `${apiUrl}/Equipe/${idequ}`;
      return this.http.get<joueur[]>(url);
      }
    rechercheParNom(nom:string):Observable<joueur[]>{
      const url = `${apiUrl}/JoueurByName/${nom}`;
      return this.http.get<joueur[]>(url);
      
    }
    ajouterEquipe(equ:Equipe):Observable<Equipe>{
      //const apiUrlEqu="http://localhost:8080/Devoir4/equ";
      return this.http.post<Equipe>(apiUrlEqu,equ,httpOptions)

    }
}
