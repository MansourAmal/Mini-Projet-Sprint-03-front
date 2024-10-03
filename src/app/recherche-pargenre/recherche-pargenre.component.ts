
import { PiecesService } from './../services/pieces.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { pieces } from '../model/piece-model';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-pargenre',
  templateUrl: './recherche-pargenre.component.html',
  styleUrls: []
})
export class RecherchePargenreComponent  implements OnInit{
  pieces!: pieces[];;
  Idgenre! : number;
  genres! : genre[];

  constructor(private PiecesService : PiecesService) { }

  ngOnInit(): void {
    this.PiecesService.listegenre().subscribe(Gen =>{
      this.genres=Gen;
      console.log(Gen);
    });
    } 
   
    onChange() {
      this.PiecesService.rechercherPargenre(this.Idgenre).subscribe(pth =>{
        this.pieces=pth
      });
    
    }
    
      
    
}
