import { Component, OnInit } from '@angular/core';

import { SpotityService } from 'src/app/services/spotity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises:any;
  nuevasCanciones:any []=[]
  loading:boolean;

  constructor(private spotity:SpotityService){

    this.loading=true;
    this.spotity.getNewReleases()
      .subscribe((data:any)=>{
        this.nuevasCanciones=data;
        console.log(this.nuevasCanciones);
        this.loading=false;
      })
  }

  ngOnInit() {
  }

}
