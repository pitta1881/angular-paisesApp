import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva:string = ''
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion(region:string){
    if(region !== this.regionActiva){
      this.regionActiva = region;
      this.paises = []
      this.paisService.buscarRegion(region)
        .subscribe((paises) => {
          this.paises = paises;
        },(err) => {
          this.paises = []
        });
    }
  }


}
