import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre'; // Remplacer Categorie par Genre
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService
import { Image } from '../model/Image';
@Component({
  selector: 'app-add-pieceth', // Renommer le sélecteur pour Pieceth
  templateUrl: './add-pieces.component.html', // Remplacer le template par celui correspondant à Pieceth
})
export class AddPiecethComponent implements OnInit {
  newPieceth = new Pieceth(); // Renommer l'objet Produit en Pieceth
  genres!: Genre[]; // Renommer les catégories en genres
  newIdGenre!: number; // Renommer pour Genre
  newGenre!: Genre;
  uploadedImage!: File;
  imagePath: any;

  constructor(
    private piecethService: PiecethService, // Remplacer ProduitService par PiecethService
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Récupérer la liste des genres
    this.piecethService
      .listeGenres() // Remplacer listeCategories par listeGenres
      .subscribe((genres) => {
        this.genres = genres;
        console.log(genres);
      });
  }

  // Méthode pour ajouter une nouvelle pièce de théâtre
  /*addPieceth() {
    // Associer le genre sélectionné à la nouvelle pièce de théâtre
    this.newPieceth.genre = this.genres.find(genre => genre.idGen == this.newIdGenre)!;
    this.piecethService.ajouterPieceth(this.newPieceth) // Remplacer ajouterProduit par ajouterPieceth
      .subscribe(pieceth => {
        console.log(pieceth);
        this.router.navigate(['pieceths']); // Rediriger vers la liste des pièces après l'ajout
      });
  }*/

  addPieceth() {
    this.newPieceth.genre = this.genres.find(
      (cat) => cat.idGen == this.newIdGenre,
    )!;
    this.piecethService.ajouterPieceth(this.newPieceth).subscribe((p) => {
      this.piecethService
        .uploadImageFS(
          this.uploadedImage,
          this.uploadedImage.name,
          p.idPieceth,
        )
        .subscribe((response: any) => {});
      this.router.navigate(['pieceths']);
    });
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    };
  }
}
