import { Component, OnInit } from '@angular/core';
import { GifServicesService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {

  constructor(private gifService:GifServicesService) { }


  get resultados(){
    return this.gifService.resultados;
  }

  ngOnInit(): void {
  }

}
