import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AddPiecesComponent } from './add-pieces/add-pieces.component';
import { MonTheatreComponent } from './mon-theatre/mon-theatre.component';
import { UpdatePieceComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RecherchePargenreComponent } from './recherche-pargenre/recherche-pargenre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    AddPiecesComponent,
    MonTheatreComponent,
    UpdatePieceComponent,
    LoginComponent,
    ForbiddenComponent,
    RecherchePargenreComponent,
    SearchFilterPipe,
    RechercheParNomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
