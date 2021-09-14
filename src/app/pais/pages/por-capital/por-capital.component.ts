import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  termino:string='Hola Mundo';
  isError:boolean = false;
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.termino = termino;
    this.isError = false;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      },(err) => {
        this.isError = true;
        this.paises = []
      });
  }

}
