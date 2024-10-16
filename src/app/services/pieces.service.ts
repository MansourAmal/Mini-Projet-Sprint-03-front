import { Genre } from './../model/Genre';
import { Pieceth } from './../model/Pieceth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PiecethService { // Renommé pour correspondre à Pieceth
  apiURL: string = 'http://localhost:8082/pieceth/api'; // Route API pour les pièces de théâtre
  apiURLGenre: string = 'http://localhost:8082/pieceth/genre'; // Route API pour les genres

  pieceths!: Pieceth[]; // un tableau de pièces de théâtre

  constructor(private http: HttpClient) {
   /*this.pieceths = [
      { idPiece: 1, nomPiece: "Hamlet", auteurPiece: "Shakespeare", dateCreation: new Date("01/14/1600"), Genre: { idG: 1, nomG: "Tragédie" } },
      { idPiece: 2, nomPiece: "Le Malade Imaginaire", auteurPiece: "Molière", dateCreation: new Date("12/17/1673"), genre: { idG: 2, nomG: "Comédie" } }
    ];*/
  }

  // Liste toutes les pièces de théâtre
  listePieceth(): Observable<Pieceth[]> {
    return this.http.get<Pieceth[]>(this.apiURL);
  }

  // Ajouter une pièce de théâtre
  ajouterPieceth(pieceth: Pieceth): Observable<Pieceth> {
    return this.http.post<Pieceth>(this.apiURL, pieceth, httpOptions);
  }

  // Supprimer une pièce de théâtre par ID
  supprimerPieceth(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // Consulter une pièce de théâtre par ID
  consulterPieceth(id: number): Observable<Pieceth> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pieceth>(url);
  }

  // Trier les pièces de théâtre par ID
  trierPieceths() {
    this.pieceths = this.pieceths.sort((n1, n2) => {
      if (n1.idPieceth > n2.idPieceth) {
        return 1;
      }
      if (n1.idPieceth < n2.idPieceth) {
        return -1;
      }
      return 0;
    });
  }

  // Mettre à jour une pièce de théâtre
  updatePieceth(pieceth: Pieceth): Observable<Pieceth> {
    return this.http.put<Pieceth>(this.apiURL, pieceth, httpOptions);
  }

  // Liste des genres
  listeGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiURLGenre);
  }

  // Rechercher des pièces par genre
  rechercherParGenre(idGenre: number): Observable<Pieceth[]> {
    const url = `${this.apiURL}/gen/${idGenre}`;
    return this.http.get<Pieceth[]>(url);
  }

  // Rechercher des pièces par nom
  rechercherParNom(nom: string): Observable<Pieceth[]> {
    const url = `${this.apiURL}/piecethsByName/${nom}`;
    return this.http.get<Pieceth[]>(url);
  }

  // Ajouter un genre
  ajouterGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiURLGenre, genre, httpOptions);
  }
}
