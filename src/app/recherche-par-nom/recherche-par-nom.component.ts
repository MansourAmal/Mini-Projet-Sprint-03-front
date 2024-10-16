import { Component, OnInit } from '@angular/core';
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService

@Component({
  selector: 'app-recherche-par-nom-pieceth', // Renommer le sélecteur
  templateUrl: './recherche-par-nom.component.html', // Remplacer le template correspondant
  styles: []
})
export class RechercheParNomPiecethComponent implements OnInit {

  nomPieceth!: string; // Remplacer nomProduit par nomPieceth
  pieces!: Pieceth[]; // Remplacer produits par pieces
  allPieces!: Pieceth[]; // Remplacer allProduits par allPieces
  searchTerm!: string;
  
  constructor(private piecethService: PiecethService) { } // Remplacer ProduitService par PiecethService

  ngOnInit(): void {
    this.piecethService.listePieceth().subscribe(pieces => { // Remplacer listeProduit par listePieceth
      console.log(pieces);
      this.pieces = pieces; // Remplacer produits par pieces
      this.allPieces = pieces; // Initialiser allPieces
    });
  }

  rechercherPieces() {
    this.piecethService.rechercherParNom(this.nomPieceth).subscribe(pieces => { // Remplacer rechercherParNomProduit par rechercherParNomPieceth
      console.log(pieces);
      this.pieces = pieces; // Remplacer produits par pieces
    });
  }

  onKeyUp(filterText: string) {
    this.pieces = this.allPieces.filter(item => // Remplacer produits par pieces
      item.nomPieceth.toLowerCase().includes(filterText) // Remplacer nomProduit par nomPieceth
    );
  }
}
