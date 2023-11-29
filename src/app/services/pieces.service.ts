import { SearchFilterPipe } from './../search-filter.pipe';
import { Injectable } from '@angular/core';
import { pieces } from '../model/piece-model'; // J'ai supposé que le nom de votre classe modèle est Piece
import { genre } from '../model/genre.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  piecesTheatre: pieces[]; // Utilisez la même casse
  pieces!: pieces ;
  genres!:genre[];
  constructor() {
    this.genres=[
      {idCat : 1, nomCat : "comedie"},
      {idCat : 2, nomCat : "romantiques"},
      {idCat : 3, nomCat : "tragedie"}
    ];
    this.piecesTheatre = [
      { idPiece: 1, nomPiece: "Cyrano de Bergerac", auteurPiece: "Edmond Rostand", dateCreation: new Date("1897"),genre:{idCat:2,nomCat:"romantique"} },
      { idPiece: 2, nomPiece: "Antigone", auteurPiece: "Jean Anouilh", dateCreation: new Date("04/02/1944"),genre:{idCat:3,nomCat:"tragedie"} },
      { idPiece: 3, nomPiece: "Hamlet", auteurPiece: "William Shakespeare", dateCreation: new Date("2002"),genre:{idCat:3,nomCat:"tragedie"} },
      { idPiece: 4, nomPiece: "Roméo et Juliette", auteurPiece: "William Shakespeare", dateCreation: new Date("1597"),genre:{idCat:2,nomCat:"romantique"} },
    ];
  }

  listePieces(): pieces[] {
    return this.piecesTheatre ;
  }

  ajouterPiece(p: pieces) {
    this.piecesTheatre.push(p);
  }
  supprimerpiece( p: pieces){
    //supprimer le produit prod du tableau produits
    const index = this.piecesTheatre.indexOf(p, 0);
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
    this.pieces=this.piecesTheatre.find(p=>p.idPiece == id)!;
    return this.pieces;
  }
  
  trierPiece() {
    this.piecesTheatre = this.piecesTheatre.sort((n1, n2) => {
      
      if (n1.idPiece! > n2.idPiece!) {
        return 1;
      }
      if (n1.idPiece! < n2.idPiece!) {
        return -1;
      }
        return 0;
    });
  }
  
    updatepiece(p: pieces) {
      this.supprimerpiece(p); // Supprime l'ancienne pièce
      this.ajouterPiece(p); // Ajoute la pièce mise à jour
      this.trierPiece(); // Trie la liste des pièces après la mise à jour.
    }
    listegenre():genre[] {
      return this.genres; // Utilisation de 'of' pour créer un Observable à partir du tableau
    }
    
    consultergenre(id:number): genre{ 
      return this.genres.find(cat => cat.idCat == id)!;
    }
    rechercherPargenre(idCat: number): pieces[] {
      console.log("Selected genre ID (Type):", typeof idCat); 
      const filterevet = this.piecesTheatre.filter(piec => {
        console.log("idcat",idCat);
        console.log("piece", piec.genre.idCat);
        console.log("Concert with Genre:", piec);
        return piec.genre.idCat == idCat;
      });
      console.log("Filtered Concerts:", filterevet);
  
      if (filterevet.length === 0) {
        console.log("Aucun concert trouvé");
      }
  
      return filterevet;
    }
    rechercherParNom(nompiece: String): pieces[] {
      const filterevet = this.piecesTheatre.filter(piec => {
        return piec.nomPiece.toLowerCase().includes(nompiece.toLowerCase());
      });
      console.log("Filtered Concerts:", filterevet);
      return filterevet;
    }
  
    
  }
    


