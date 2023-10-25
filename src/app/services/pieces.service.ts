import { Injectable } from '@angular/core';
import { pieces } from '../model/piece-model'; // J'ai supposé que le nom de votre classe modèle est Piece

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  piecesTheatre: pieces[]; // Utilisez la même casse
  pieces!: pieces ;
  constructor() {
    this.piecesTheatre = [
      { idPiece: 1, nomPiece: "Cyrano de Bergerac", auteurPiece: "Edmond Rostand", dateCreation: new Date("1897") },
      { idPiece: 2, nomPiece: "Antigone", auteurPiece: "Jean Anouilh", dateCreation: new Date("04/02/1944") },
      { idPiece: 3, nomPiece: "Hamlet", auteurPiece: "William Shakespeare", dateCreation: new Date("2002") },
      { idPiece: 4, nomPiece: "Roméo et Juliette", auteurPiece: "William Shakespeare", dateCreation: new Date("1597") },
    ];
  }

  listePieces(): pieces[] {
    return this.piecesTheatre;
  }

  ajouterPiece(piece: pieces) {
    this.piecesTheatre.push(piece);
  }
  supprimerpiece( piece: pieces){
    //supprimer le produit prod du tableau produits
    const index = this.piecesTheatre.indexOf(piece, 0);
    if (index > -1) {
    this.piecesTheatre.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }
}*/
  }
  consulterPiece(id:number):pieces{
    this.pieces=this.piecesTheatre.find(p=>this.pieces.idPiece == id)!;
    return this.pieces;
  }
  
  trierPiece(){
    this.piecesTheatre = this.piecesTheatre.sort((n1,n2) => {
    if (n1.idPiece! > n2.idPiece!) {
    return 1;
    }
    if (n1.idPiece! < n2.idPiece!) {
    return -1;
    }
    return 0;
    });
    }
    updatepiece(p:pieces)
  {
    // console.log(p);
    this.supprimerpiece(p);
    this.ajouterPiece(p);
    this.trierPiece();
  }
    
}

