import { Genre } from "./Genre";
import { Image } from "./Image";

export class Pieceth {
    idPieceth! : number;
    nomPieceth! : string;
    auteurPieceth! : string;
    dateCreation! : Date ;
    genre!:Genre;
    image! : Image
    imageStr!:string

    images!: Image[];
  }

    