import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable()

export class peticiones{

    public url:any;

    constructor(public _peticiones:HttpClient){
            this.url="https://reqres.in/";
    }


    getUser():Observable<any>{
        return this._peticiones.get(this.url+"api/users?page=2");
    }




}