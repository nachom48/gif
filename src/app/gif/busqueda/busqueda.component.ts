import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifServicesService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  //busca en las referencias locales el txtBuscsar y devuelve su input
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

constructor(private gifsService:GifServicesService){

}

buscar() {

  const valor = this.txtBuscar.nativeElement.value;

  if ( valor.trim().length === 0 ) {
    return;
  }

  this.gifsService.buscarGifs( valor );

  this.txtBuscar.nativeElement.value = '';
}

}
//operador para asegurarse q el objeto nos ea nulo !
