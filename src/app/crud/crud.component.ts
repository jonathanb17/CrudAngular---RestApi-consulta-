import { Component, OnInit } from '@angular/core';
import { Usuarios } from './../models/modelo';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public datosArrays:Array<Usuarios>;
  public datos:Usuarios;

  constructor() {

        this.datos= new Usuarios('','','','');

        this.datosArrays= [
                new Usuarios('jonathan','bustamante','aaaaa','Argentino'),
                new Usuarios('andres','busta','abcd','Español'),
                new Usuarios('franco','bu','cdef','Peru')
        ];

   }

  ngOnInit() {
  }

  guardar(){
    this.datosArrays.push(this.datos);
  }

  eliminar(indice){
      this.datosArrays.splice(indice,1);
  }

}
