import { Component, OnInit } from '@angular/core';
import { PiecesService } from '../services/pieces.service';
import { pieces } from '../model/piece-model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-update-piece',
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit{
  currentpiece=new pieces();
  genre! : genre[];
  updatedGenId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private pieceService : PiecesService,
    private router:Router
    ) {}
    
    ngOnInit() {
      this.pieceService.listegenre().subscribe(Gen =>{
        this.genre=Gen;
        console.log(Gen);
      });
      this.pieceService.consulterPiece(this.activatedRoute.snapshot.params['id']).subscribe(pth=>{this.currentpiece=pth;});
      this.updatedGenId=this.currentpiece.genre.idG;

    }

    updatePiece() {
      this.currentpiece.genre=this.genre.find(Gen => Gen.idG==this.updatedGenId)!;
      this.pieceService.updatepiece(this.currentpiece).subscribe(pth =>{
        this.router.navigate(['/pieces']);
      });
      
    } 

}