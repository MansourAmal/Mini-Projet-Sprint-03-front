import { RechercheParGenreComponent } from './recherche-pargenre/recherche-pargenre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';
import { AddPiecethComponent } from './add-pieces/add-pieces.component';
import { MonTheatreComponent } from './mon-theatre/mon-theatre.component';
import { UpdatePiecethComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PieceGuard } from './piece.guard';
import { RechercheParNomPiecethComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';



const routes: Routes = [
  { path: 'pieceths', component: PiecesComponent },
  { path: 'add-pieces', component: AddPiecethComponent, canActivate:[PieceGuard] },
  { path: 'mon-theatre', component: MonTheatreComponent },
  { path: "", redirectTo: "mon-theatre", pathMatch: "full" },
  { path: "updatePiece/:id", component: UpdatePiecethComponent },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "recherche-pargenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component :RechercheParNomPiecethComponent},
  {path: "listeGenres", component : ListeGenresComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
