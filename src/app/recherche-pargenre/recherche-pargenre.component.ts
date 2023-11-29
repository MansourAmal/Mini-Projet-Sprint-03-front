
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
    this.genres = this.PiecesService.listegenre();
    }
  
    onChange() {
      console.log('Selected Type ID:', this.Idgenre);
    
      //Call the service to filter pieces based on the selected Type
      this.pieces = this.PiecesService.rechercherPargenre(this.Idgenre);
    
      //Debugging statement
      console.log('Filtered pieces:', this.pieces);
    }
    
}
