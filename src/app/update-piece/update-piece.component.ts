import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiecesService } from '../services/pieces.service';
import { pieces } from '../model/piece-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-piece',
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit{
  currentpiece=new pieces();
  constructor(private  activatedRoute: ActivatedRoute,
    private pieceService : PiecesService,
    private router:Router
    ) {}
    
  ngOnInit(): void {
    this.currentpiece=this.pieceService.consulterPiece(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentpiece);
      
  }
  updatepiece()
  { 
    this.pieceService.updatepiece(this.currentpiece);
    this.router.navigate(['/pieces']);
  }

}
