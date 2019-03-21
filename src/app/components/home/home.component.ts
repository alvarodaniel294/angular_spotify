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
  errorBoolean:boolean;
  mensajeError:string;
  constructor(private spotity:SpotityService){
    this.errorBoolean=false;
    this.loading=true;
    this.spotity.getNewReleases()
      .subscribe((data:any)=>{
        this.nuevasCanciones=data;
        console.log(this.nuevasCanciones);
        this.loading=false;
      },(errorServicio)=>{
        this.errorBoolean=true;
        this.mensajeError=errorServicio.error.error.message;
      })
  }

  ngOnInit() {
  }

}
