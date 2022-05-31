import { Component } from '@angular/core';
import { GifServicesService } from 'src/app/gif/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {

  constructor(private gifService:GifServicesService) { }

  get historial(){
    return this.gifService.historial;
  }

  buscar(hist:string){
    this.gifService.buscarGifs(hist)


}
}
