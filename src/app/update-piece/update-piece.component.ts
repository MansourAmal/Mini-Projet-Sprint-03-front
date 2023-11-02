import { Component, OnInit } from '@angular/core';
import { PiecesService } from '../services/pieces.service';
import { pieces } from '../model/piece-model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { genre } from '../model/categories-model';

@Component({
  selector: 'app-update-piece',
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit{
  currentpiece=new pieces();
  genre! : genre[];
  updatedCatId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private pieceService : PiecesService,
    private router:Router
    ) {}
    
    ngOnInit() {
      this.genre= this.pieceService.listeCategories();
      const id = +this.activatedRoute.snapshot.params['id']; // Convertit l'ID en nombre
      this.currentpiece = this.pieceService.consulterPiece(id);
      this.updatedCatId=this.currentpiece.genre.idCat;
    }
    
    updatePiece() {
      this.currentpiece.genre=this.pieceService.consulterCategorie(this.updatedCatId);
      this.pieceService.updatepiece(this.currentpiece);
      this.router.navigate(['/pieces']); // Redirige vers la liste des pièces après la mise à jour.
    }
    

}
