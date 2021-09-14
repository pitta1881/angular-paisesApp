import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino:string='';
  isError:boolean = false;
  mostrarSugerencia:boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencia = false
    this.termino = termino;
    this.isError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      },(err) => {
        this.isError = true;
        this.paises = []
      });
  }

  sugerencias(termino:string){
    this.mostrarSugerencia = termino === '' ? false : true
    this.isError = false;
    this.termino = termino;
    if(termino !== ''){
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => {this.paisesSugeridos = paises.splice(0,5),
        err => this.paisesSugeridos = []
      })
    }
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

}
