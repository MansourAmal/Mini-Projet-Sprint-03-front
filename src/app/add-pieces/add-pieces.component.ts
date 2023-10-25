import { Component, OnInit } from '@angular/core';
import { pieces } from '../model/piece-model';
import { PiecesService } from '../services/pieces.service';
@Component({
  selector: 'app-add-pieces',
  templateUrl: './add-pieces.component.html',
  styleUrls: ['./add-pieces.component.css']
})
export class AddPiecesComponent implements OnInit{
  newpiece=new pieces();
  constructor(private piecesService:PiecesService){}
  addpiece(){
    //console.log(this.newpiece);
    this.piecesService.ajouterPiece(this.newpiece);
  }
  ngOnInit(): void {
      
  }
}
