import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { InfoRestComponent } from './info-rest/info-rest.component';
import { CrudComponent } from './crud/crud.component';

//lo que importamos
import { appRoutingProviders ,routing} from './routes/rutas';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    InfoRestComponent,
    CrudComponent
  ],
  imports: [
      routing,
      FormsModule,
      BrowserModule,
      HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
