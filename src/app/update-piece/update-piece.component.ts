import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/Genre'; // Remplacer Categorie par Genre
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService

@Component({
  selector: 'app-update-pieceth', // Renommer le sélecteur
  templateUrl: './update-piece.component.html', // Mettre à jour le template correspondant
  styles: []
})
export class UpdatePiecethComponent implements OnInit {

  currentPieceth = new Pieceth(); 
  genres!: Genre[]; 
  updatedGenId!: number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private piecethService: PiecethService) { } // Remplacer ProduitService par PiecethService

  ngOnInit(): void {
    this.piecethService.listeGenres(). // Remplacer listeCategories par listeGenres
      subscribe(genres => {
        this.genres = genres; // Adapter selon la structure de retour de votre API
        console.log(genres);
      });

    this.piecethService.consulterPieceth(this.activatedRoute.snapshot.params['id']). // Remplacer consulterProduit par consulterPieceth
      subscribe(pieceth => {
        this.currentPieceth = pieceth; 
        this.updatedGenId = this.currentPieceth.genre.idGen; // Adapter pour utiliser Genre
      });
  }

  updatePieceth() { // Remplacer updateProduit par updatePieceth
    this.currentPieceth.genre = this.genres.find(genre => genre.idGen == this.updatedGenId)!; // Adapter pour utiliser Genre
    this.piecethService.updatePieceth(this.currentPieceth).subscribe(() => { // Remplacer updateProduit par updatePieceth
      this.router.navigate(['pieceths']); // Adapter la redirection si nécessaire
    });
  }
}
