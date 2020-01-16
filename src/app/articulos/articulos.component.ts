import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  public descripcion:string;
  public descripcion2:string;
  public descripcion3:string;
  //---------------------------
  public duracion:number;

  //-----------------------
  public universidades:string;
  public universidades2:string;
  public universidades3:string;

  constructor() { 

        this.descripcion="Ingenieria en Sistemas";
        this.descripcion2="Ingenieria Electronica";
        this.descripcion3="Ingenieria Mecatronica";

        //-------------------------

        this.duracion=5;
        //--------------------------

        this.universidades="Universidad tecnologica nacional";
        this.universidades2="Universidad nacional de cordoba";
        this.universidades3="Universidad de buenos aires";
  }

  ngOnInit() {
  }

}
