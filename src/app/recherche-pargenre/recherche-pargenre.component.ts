import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/Genre'; // Remplacer Categorie par Genre
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService

@Component({
  selector: 'app-recherche-par-genre', // Renommer le sélecteur
  templateUrl: './recherche-pargenre.component.html', // Mettre à jour le template correspondant
  styles: []
})
export class RechercheParGenreComponent implements OnInit {
  IdGenre! : number; // Remplacer IdCategorie par IdGenre
  genres! : Genre[]; // Remplacer categories par genres
  pieces! : Pieceth[]; // Remplacer produits par pieces

  constructor(private piecethService: PiecethService) { } // Remplacer ProduitService par PiecethService

  ngOnInit(): void {
    this.piecethService.listeGenres(). // Remplacer listeCategories par listeGenres
      subscribe(genres => {
        this.genres = genres; 
        console.log(genres);
    });
  }

  onChange() {
    this.piecethService.rechercherParGenre(this.IdGenre). // Remplacer rechercherParCategorie par rechercherParGenre
      subscribe(pieces => {
        this.pieces = pieces; // Remplacer produits par pieces
    });
  }
}
