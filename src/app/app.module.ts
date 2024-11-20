import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
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
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    RegisterComponent,
    VerifEmailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, 
    useClass : TokenInterceptor, 
    multi : true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
