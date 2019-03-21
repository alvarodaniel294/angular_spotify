import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotityService {

  constructor(private http:HttpClient) {
    console.log('el servicio de spotity esta listo');
    
   }
   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;
     const headers=new HttpHeaders({
        'Authorization':'Bearer BQDlcWcn7ElSav2L6hWkcyMNiLIWQigNQv_Hnj9YjBHVxvG_Qm93SCqwwXsNXJmRcJv3nCzEdQukNjeLF7I'
      });
    
      return this.http.get(url,{headers});
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map(data=>data['albums'].items));
   }

   getArtists(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data=>data['artists'].items));

   }
   getArtist(id:string){

    return this.getQuery(`artists/${id}`);
      
   }

   getTopTracks(id:string){
     return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data=>data['tracks']));
   }
}
