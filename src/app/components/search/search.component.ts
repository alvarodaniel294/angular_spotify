import { Component } from '@angular/core';
import { SpotityService } from 'src/app/services/spotity.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas: any[] = [];
  loading:boolean;

  constructor(private spotify: SpotityService) {
    
   }
  
  buscar(termino: string) {
    this.loading=true;
    if(termino.length>0){
      this.spotify.getArtists(termino)
      .subscribe((artists: any) => {
        console.log(artists)
        this.artistas = artists
        this.loading=false;
      }
      )
    console.log(termino);

    }else{
      this.loading=false;
    }
    
  }

}
