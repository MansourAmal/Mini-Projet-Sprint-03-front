import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';
import { AddPiecesComponent } from './add-pieces/add-pieces.component';
import { MonTheatreComponent } from './mon-theatre/mon-theatre.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';



const routes: Routes = [
  { path: 'pieces', component: PiecesComponent },
  { path: 'add-pieces', component: AddPiecesComponent },
  { path: 'mon-theatre', component: MonTheatreComponent },
  { path: "", redirectTo: "mon-theatre", pathMatch: "full" },
  { path: 'updatePiece/:id',component:UpdatePieceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
