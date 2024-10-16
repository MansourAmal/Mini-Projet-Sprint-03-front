import { Component, OnInit } from '@angular/core';
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { AuthService } from '../services/auth.service';
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService

@Component({
  selector: 'app-pieces', // Renommer le sélecteur pour Pieceth
  templateUrl: './pieces.component.html' // Remplacer le template correspondant
})
export class PiecesComponent implements OnInit {

  pieces?: Pieceth[]; // Remplacer produits par pieces

  constructor(private piecethService: PiecethService, // Remplacer ProduitService par PiecethService
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.chargerPieces(); // Appeler la méthode pour charger les pièces de théâtre
  }

  // Méthode pour charger la liste des pièces de théâtre
  chargerPieces() {
    this.piecethService.listePieceth().subscribe(pieces => { // Remplacer listeProduit par listePieceth
      console.log(pieces);
      this.pieces = pieces; // Remplacer produits par pieces
    });
  }

  // Méthode pour supprimer une pièce de théâtre
  supprimerPieceth(p: Pieceth) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.piecethService.supprimerPieceth(p.idPieceth).subscribe(() => { // Remplacer supprimerProduit par supprimerPieceth
        console.log("pièce supprimée");
        this.chargerPieces(); // Recharger la liste des pièces après suppression
      });
    }
  }
}
