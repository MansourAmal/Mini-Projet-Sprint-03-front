import { SearchFilterPipe } from './../search-filter.pipe';
import { Injectable } from '@angular/core';
import { pieces } from '../model/piece-model'; // J'ai supposé que le nom de votre classe modèle est Piece
import { genre } from '../model/genre.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class PiecesService {

  apiURL: string = 'http://localhost:8081/Theatres/api';
  //piecesTheatre: pieces[]; // Utilisez la même casse
  pieces!: pieces[] ;
  genres!:genre[];
  constructor(private http : HttpClient) {

   /* this.genres=[
      {idG : 1, nomG: "comedie",descriptionG:"heureux"},
      {idG : 2, nomG : "romantiques",descriptionG:"amour"},
      {idG : 3, nomG : "tragedie",descriptionG:"triste"}
    ];
   /* this.piecesTheatre = [
      { idPiece: 1, nomPiece: "Cyrano de Bergerac", auteurPiece: "Edmond Rostand", dateCreation: new Date("1897"),genre:{idCat:2,nomCat:"romantique"} },
      { idPiece: 2, nomPiece: "Antigone", auteurPiece: "Jean Anouilh", dateCreation: new Date("04/02/1944"),genre:{idCat:3,nomCat:"tragedie"} },
      { idPiece: 3, nomPiece: "Hamlet", auteurPiece: "William Shakespeare", dateCreation: new Date("2002"),genre:{idCat:3,nomCat:"tragedie"} },
      { idPiece: 4, nomPiece: "Roméo et Juliette", auteurPiece: "William Shakespeare", dateCreation: new Date("1597"),genre:{idCat:2,nomCat:"romantique"} },
    ];*/
  }

  listePieces(): Observable<pieces[]> {
    return this.http.get<pieces[]>(this.apiURL) ;
  }
  
  ajouterPiece(p: pieces): Observable<pieces> {
    return this.http.post<pieces>(this.apiURL,p,httpOptions);
  }
  
  supprimerpiece( id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions)
    }  
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }
}*/
  
  consulterPiece(id: number): Observable<pieces> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<pieces>(url);
    }
  
    
  trierPiece() {
    this.pieces = this.pieces.sort((n1, n2) => {
      
      if (n1.idPiece! > n2.idPiece!) {
        return 1;
      }
      if (n1.idPiece! < n2.idPiece!) {
        return -1;
      }
        return 0;
    });
  }
  
    updatepiece(p: pieces):Observable<pieces> {
      return this.http.put<pieces>(this.apiURL,p,httpOptions);
    }


    listegenre():Observable<genre[]> {
      return this.http.get<genre[]>(this.apiURL+"/G"); // Utilisation de 'of' pour créer un Observable à partir du tableau
    }
    
      
    
    consultergenre(id:number): genre{ 
      return this.genres.find(cat => cat.idG == id)!;
    }

    rechercherPargenre(idG: number): Observable<pieces[]> { 
      const url = `${this.apiURL}/theatreGen/${idG}`;
      return this.http.get<pieces[]>(url);
    }

    rechercherParNom(nompiece: String):Observable< pieces[]> {
      const url = `${this.apiURL}/thByName/${nompiece}`;
       return this.http.get<pieces[]>(url).pipe();
    }
  }
    


