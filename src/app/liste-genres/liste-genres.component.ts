import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/Genre'; // Remplacer Categorie par Genre
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService

@Component({
  selector: 'app-liste-genres', // Renommer le sélecteur pour Genre
  templateUrl: './liste-genres.component.html', // Remplacer le template par celui correspondant à Genre
  styles: []
})
export class ListeGenresComponent implements OnInit {

  genres?: Genre[]; 
  ajout: boolean = true;

  updatedGenre: Genre = {"idGen": 0, "nomGen": "","descriptionGen":""}; // Remplacer Categorie par Genre

  constructor(private piecethService: PiecethService) { } // Remplacer ProduitService par PiecethService

  ngOnInit(): void {
    this.chargerGenres(); // Appeler la méthode pour charger les genres
  }

  // Méthode pour charger la liste des genres
  chargerGenres() {
    this.piecethService.listeGenres(). // Remplacer listeCategories par listeGenres
      subscribe(genres => {
        this.genres = genres; // Adapter à la structure de votre API
        console.log(genres);
      });
    }
  
  // Méthode appelée lorsque le genre est mis à jour
  genreUpdated(genre: Genre) {
    console.log("Genre reçu du composant updateGenre ", genre);
    this.piecethService.ajouterGenre(genre) // Remplacer ajouterCategorie par ajouterGenre
      .subscribe(() => this.chargerGenres()); // Recharger les genres après ajout
  }

  // Méthode pour mettre à jour un genre
  updateGenre(genre: Genre) {
    this.updatedGenre = genre; // Préparer le genre à être mis à jour
    this.ajout = false; // Désactiver l'ajout pour activer la mise à jour
  }
}
