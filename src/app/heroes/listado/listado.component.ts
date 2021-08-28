import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
// el implements OnInit fue agregado de manera automatica al crear el component por consola
export class ListadoComponent implements OnInit {

   constructor() { 
    //console.log('constructor');
  }

  ngOnInit(): void {
    //usualmente usado par inicializar variables
    //console.log('ngOnInit');
  }

  heroes : string[] =['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  
  heroeBorrado: string="";


  borrarHeroe(){
    console.log('Borrando...');
    const borrado =  this.heroes.shift() || '';
    console.log('borrado: ' + borrado);

    this.heroeBorrado = borrado;



  }
}
