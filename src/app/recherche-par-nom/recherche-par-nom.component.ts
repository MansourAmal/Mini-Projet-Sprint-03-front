import { PiecesService } from './../services/pieces.service';
import { pieces } from './../model/piece-model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: []
})
export class RechercheParNomComponent {
  pieces:pieces[]=[];
  allpieces:pieces[]=[];
  nompiece!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.pieces = this.PiecesService.listePieces();
    this.allpieces=this.pieces;
    }
  constructor(private PiecesService : PiecesService){}
  onChange() {
    this.pieces = this.PiecesService.rechercherParNom(this.searchTerm);
    console.log('Filtered pieces:', this.pieces);
  }
  onKeyUp(filterText : string){ this.pieces = this.pieces.filter(item => item.nomPiece.toLowerCase().includes(filterText)); }
  
}



