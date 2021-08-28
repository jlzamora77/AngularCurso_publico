import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/Contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// Tarea:
//Crear un nuevo modulo ContadorModule
// crear declaraciones y esxportaciones para que vuelva a funcionar

@NgModule({
  declarations: [
    AppComponent, 
    // ContadorComponent

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
