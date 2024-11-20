import { Genre } from './../model/Genre';
import { Pieceth } from './../model/Pieceth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Image } from '../model/Image';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PiecethService {
  // Renommé pour correspondre à Pieceth
  apiURL: string = 'http://localhost:8082/pieceth/api'; // Route API pour les pièces de théâtre
  apiURLGenre: string = 'http://localhost:8082/pieceth/genre'; // Route API pour les genres

  pieceths!: Pieceth[]; // un tableau de pièces de théâtre

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    /*this.pieceths = [
      { idPiece: 1, nomPiece: "Hamlet", auteurPiece: "Shakespeare", dateCreation: new Date("01/14/1600"), Genre: { idG: 1, nomG: "Tragédie" } },
      { idPiece: 2, nomPiece: "Le Malade Imaginaire", auteurPiece: "Molière", dateCreation: new Date("12/17/1673"), genre: { idG: 2, nomG: "Comédie" } }
    ];*/
  }

  // Liste toutes les pièces de théâtre
  listePieceth(): Observable<Pieceth[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Pieceth[]>(this.apiURL + '/all', {
      headers: httpHeaders,
    });
  }

  // Ajouter une pièce de théâtre
  ajouterPieceth(pieceth: Pieceth): Observable<Pieceth> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Pieceth>(this.apiURL + '/addprod', pieceth, {
      headers: httpHeaders,
    });
  }

  // Supprimer une pièce de théâtre par ID
  supprimerPieceth(id: number) {
    const url = `${this.apiURL}/delprod/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }

  // Consulter une pièce de théâtre par ID
  consulterPieceth(id: number): Observable<Pieceth> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Pieceth>(url, { headers: httpHeaders });
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
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.put<Pieceth>(this.apiURL + '/updateprod', pieceth, {
      headers: httpHeaders,
    });
  }

  // Liste des genres
  listeGenres(): Observable<Genre[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.get<Genre[]>(this.apiURLGenre, { headers: httpHeaders });
  }

  // Rechercher des pièces par genre
  rechercherParGenre(idGenre: number): Observable<Pieceth[]> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    const url = `${this.apiURL}/gen/${idGenre}`;
    return this.http.get<Pieceth[]>(url, { headers: httpHeaders });
  }

  // Rechercher des pièces par nom
  rechercherParNom(nom: string): Observable<Pieceth[]> {
    const url = `${this.apiURL}/piecethsByName/${nom}`;
    return this.http.get<Pieceth[]>(url);
  }

  // Ajouter un genre
  ajouterGenre(genre: Genre): Observable<Genre> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return this.http.post<Genre>(this.apiURLGenre, genre, {
      headers: httpHeaders,
    });
  }

  uploadImage(file: File, filename: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
  }
  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImagePiece(file: File, filename: string, idPiece:number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uplaodImagePiece'}/${idPiece}`;
    return this.http.post(url, imageFormData);
    }

    supprimerImage(id : number) {
      const url = `${this.apiURL}/image/delete/${id}`;
      return this.http.delete(url, httpOptions);
    }


    uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
      return this.http.post(url, imageFormData);
      }
    
}
