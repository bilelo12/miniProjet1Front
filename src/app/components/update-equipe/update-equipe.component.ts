import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from 'src/app/model/equipe';


@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {
  @Input()
  equipe!:Equipe
  
  @Input()
  ajout!:boolean;

  @Output()
  equipeUpdated=new EventEmitter<Equipe>();
  constructor() { }

  ngOnInit(): void {
    console.log("from update compo",this.equipe);
  }
  saveEquipe(){
    this.equipeUpdated.emit(this.equipe)

  }

}
