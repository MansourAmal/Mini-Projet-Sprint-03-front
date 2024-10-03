import { Component, OnInit } from '@angular/core';
import { pieces } from '../model/piece-model';
import { PiecesService } from '../services/pieces.service';
import { ActivatedRoute,Router } from '@angular/router';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-add-pieces',
  templateUrl: './add-pieces.component.html',
  styleUrls: ['./add-pieces.component.css']
})
export class AddPiecesComponent implements OnInit{
  newpiece=new pieces();
  genre! : genre[];
  newIdCat! : number;
  newgenre! : genre;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private piecesService:PiecesService){}
  addpiece(){
    this.newpiece.genre=this.genre.find(Gen => Gen.idG== this.newIdCat)!;
    this.piecesService.ajouterPiece(this.newpiece).subscribe(pth =>{
      console.log(pth);
      this.router.navigate(['pieces']);
    });
  }
      
  ngOnInit(): void {
    this.piecesService.listegenre().subscribe(Gen =>{
      this.genre = Gen;
      console.log(Gen);
    });
      
  }   
  
}



