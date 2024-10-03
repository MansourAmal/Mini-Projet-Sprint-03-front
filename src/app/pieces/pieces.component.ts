import { Component,OnInit } from '@angular/core';
import { pieces } from '../model/piece-model';
import { PiecesService } from '../services/pieces.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent implements OnInit{
  pieces!: pieces[];
  constructor(private  piecesService : PiecesService,
              public authService: AuthService) {
    //this.piecesTheatrales = piecesService.listePieces();
      
    }
  ngOnInit(): void {
    this.chargerPiece();    
  } 

  chargerPiece(){
    this.piecesService.listePieces().subscribe(pth => {
      console.log(pth);
      this.pieces = pth;
      });
  }

  supprimerPiece(p: pieces)
  {
    //console.log(p);
    let conf=confirm("etes-vous sur ?");
    if(conf){
      this.piecesService.supprimerpiece(p.idPiece).subscribe(()=>{
        console.log("piece supprimé");
        this.chargerPiece();
      });
    }
   
  }

}
