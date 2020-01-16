import{ModuleWithProviders} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';



import { ArticulosComponent } from './../articulos/articulos.component';
import { CrudComponent } from './../crud/crud.component';
import { InfoRestComponent } from './../info-rest/info-rest.component';


const rutas:Routes=[
    {path:'articulos',component:ArticulosComponent},
    {path:'crud',component:CrudComponent},
    {path:'infoRest',component:InfoRestComponent}
];


export const appRoutingProviders:any[]=[];

export const routing : ModuleWithProviders=RouterModule.forRoot(rutas);