import { Component, OnInit } from '@angular/core';


import { peticiones } from './../service/peticiones';


@Component({
  selector: 'app-info-rest',
  templateUrl: './info-rest.component.html',
  styleUrls: ['./info-rest.component.css'],
  providers:[peticiones]
})
export class InfoRestComponent implements OnInit {

  public url:any;

  constructor(public _peticionesHttp:peticiones) { }

  ngOnInit() {

      this._peticionesHttp.getUser().subscribe(

        result=>{
          this.url=result.data;
        },
        error=>{
          console.log(<any>error);
        }
      )
        
  }

}
