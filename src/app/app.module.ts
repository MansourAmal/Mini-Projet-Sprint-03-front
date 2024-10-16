import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AddPiecethComponent } from './add-pieces/add-pieces.component';
import { MonTheatreComponent } from './mon-theatre/mon-theatre.component';
import { UpdatePiecethComponent } from './update-piece/update-piece.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParGenreComponent } from './recherche-pargenre/recherche-pargenre.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomPiecethComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    AddPiecethComponent,
    MonTheatreComponent,
    UpdatePiecethComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParGenreComponent,
    SearchFilterPipe,
    RechercheParNomPiecethComponent,
    ListeGenresComponent,
    UpdateGenreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
