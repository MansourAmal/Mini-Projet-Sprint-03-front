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
    this.PiecesService.listePieces().subscribe(pth =>{
      this.pieces = pth;
      this.allpieces = pth;
    });
   
  }
  constructor(private PiecesService : PiecesService){}
  
  rechercherPiece(){
    this.PiecesService.rechercherParNom(this.nompiece).subscribe(pth => {
      this.pieces = this.allpieces; 
    console.log(pth)
  });
    }

    
    
  
}



