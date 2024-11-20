import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/Genre'; // Remplacer Categorie par Genre
import { Pieceth } from '../model/Pieceth'; // Remplacer Produit par Pieceth
import { PiecethService } from '../services/pieces.service'; // Remplacer ProduitService par PiecethService
import { Image } from '../model/Image';
@Component({
  selector: 'app-update-pieceth', // Renommer le sélecteur
  templateUrl: './update-piece.component.html', // Mettre à jour le template correspondant
  styles: [],
})
export class UpdatePiecethComponent implements OnInit {
  currentPieceth = new Pieceth();
  genres!: Genre[];
  updatedGenId!: number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private piecethService: PiecethService,
  ) {} // Remplacer ProduitService par PiecethService

  ngOnInit(): void {
    /* this.piecethService.listeGenres(). // Remplacer listeCategories par listeGenres
      subscribe(genres => {
        this.genres = genres; // Adapter selon la structure de retour de votre API
        console.log(genres);
      });

    this.piecethService.consulterPieceth(this.activatedRoute.snapshot.params['id']). // Remplacer consulterProduit par consulterPieceth
      subscribe(pieceth => {
        this.currentPieceth = pieceth; 
        this.updatedGenId = this.currentPieceth.genre.idGen; // Adapter pour utiliser Genre
      });*/
    this.piecethService.listeGenres().subscribe((genres) => {
      this.genres = genres; // Adapter selon la structure de retour de votre API
      console.log(genres);
    });
    this.piecethService
      .consulterPieceth(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentPieceth = prod;
        this.updatedGenId = prod.genre.idGen;
      });

    /*this.piecethService
      .consulterPieceth(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentPieceth = prod;
        this.updatedGenId = prod.genre.idGen;
        this.piecethService
          .loadImage(this.currentPieceth.image.idImage)
          .subscribe((img: Image) => {
            this.myImage = 'data:' + img.type + ';base64,' + img.image;
          });
      });*/
  }

  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }

  /*updatePieceth() {
    // Remplacer updateProduit par updatePieceth
    this.currentPieceth.genre = this.genres.find(
      (genre) => genre.idGen == this.updatedGenId,
    )!; // Adapter pour utiliser Genre
    this.piecethService.updatePieceth(this.currentPieceth).subscribe(() => {
      // Remplacer updateProduit par updatePieceth
      this.router.navigate(['pieceths']); // Adapter la redirection si nécessaire
    });
  }*/


  updatePieceth() {
    this.currentPieceth.genre = this.genres.find(
      (genre) => genre.idGen == this.updatedGenId,
    )!;
    this.piecethService
    .updatePieceth(this.currentPieceth)
    .subscribe((prod) => {
    this.router.navigate(['pieceths']);
    });
    
  }

  onAddImagePiece() {
    this.piecethService
      .uploadImagePiece(
        this.uploadedImage,
        this.uploadedImage.name,
        this.currentPieceth.idPieceth,
      )
      .subscribe((img: Image) => {
        this.currentPieceth.images.push(img);
      });
  }

  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.piecethService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentProduit.images
    const index = this.currentPieceth.images.indexOf(img, 0);
    if (index > -1) {
    this.currentPieceth.images.splice(index, 1);
    }
    });
    }
}
