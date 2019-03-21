import { Component,  } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotityService } from 'src/app/services/spotity.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artistId:any;
  artista:any;
  loading:boolean=true;
  topTracks:any[]=[];
  constructor(private activated_route:ActivatedRoute,
              private spotify:SpotityService) {
    this.artistId=this.activated_route.params.subscribe(params=>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      
    })

   }

 
  
  getArtist(id:string){
    this.spotify.getArtist(id).subscribe(data=>{
      this.artista=data;
      this.loading=false;
      
    })
  }
  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe((toptracks:any)=>{
      this.topTracks=toptracks;
      console.log(this.topTracks);
      
    })
  }

}
