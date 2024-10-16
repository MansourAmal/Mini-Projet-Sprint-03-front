import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre } from '../model/Genre';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent {

  @Input()
  genres! : Genre;

  @Input()
  ajout!:boolean;

  @Output() 
  genreUpdated = new EventEmitter<Genre>();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ",this.genres);
  }

  saveGenre(){
    this.genreUpdated.emit(this.genres);
  }

  modeAjout()
  {
    this.ajout=true;
    this.genres.idGen = 0;
    this.genres.nomGen="";
  }
}


