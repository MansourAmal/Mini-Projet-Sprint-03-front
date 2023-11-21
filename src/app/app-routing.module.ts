import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';
import { AddPiecesComponent } from './add-pieces/add-pieces.component';
import { MonTheatreComponent } from './mon-theatre/mon-theatre.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PieceGuard } from './piece.guard';



const routes: Routes = [
  { path: 'pieces', component: PiecesComponent },
  { path: 'add-pieces', component: AddPiecesComponent, canActivate:[PieceGuard] },
  { path: 'mon-theatre', component: MonTheatreComponent },
  { path: "", redirectTo: "mon-theatre", pathMatch: "full" },
  { path: "updatePiece/:id", component: UpdatePieceComponent },
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
