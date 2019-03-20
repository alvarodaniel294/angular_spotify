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
        'Authorization':'Bearer BQCWYv-NBpDwlHRRhISWzFXFNCQIIklTeMkJ3oCbm2DKe6lOin9lRi1_9-cJL3N2HR27qnLaaEyEO-zcDmY'
      });
    
      return this.http.get(url,{headers});
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map(data=>data['albums'].items));
   }

   getArtist(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data=>data['artists'].items));

   }
}
