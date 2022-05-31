import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifServicesService {

  private apiKey     :string='lHzAPNy3lkG1rei7qxAJIuKI1WKz0ghr';
  private servicioUrl:string="https://api.giphy.com/v1/gifs";
  public resultados  :Gif[]=[];
  private _historial :string[]=[];
//con el _ digo q le quiero exponer alguna propiedad para q se peuda ir cambiando

  get historial(){
    return [...this._historial];
  }

  buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }
    // Otra forma a hacerlo con async await
    // const resp=await fetch('https://api.giphy.com/v1/gifs/trending?api_key=lHzAPNy3lkG1rei7qxAJIuKI1WKz0ghr&q=dragon ball&limit=10');
    // const data=await resp.json();

    // Fetch en JavaScript
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=lHzAPNy3lkG1rei7qxAJIuKI1WKz0ghr&q=dragon ball&limit=10')
    // .then(respo=>{
    //   respo.json().then(data=>{
    //     console.log(data);
    //   })
    // })


    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',query);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params} )
            .subscribe((resp:any)=>{
              this.resultados=resp.data;
              localStorage.setItem('resultados', JSON.stringify( this.resultados )  );

            })
  }
  //con el metodo unshift introduzco el valor en el array en el primer lugar


  //para hacer peticiones HTTP importo el modulo y luego lo llamo con el constructor
  constructor(private http:HttpClient) {

    //el constructor solo se ejecuta una sola vez

      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];


    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }
  //   if(localStorage.getItem('historial')){
  //     this._historial=JSON.parse(localStorage.getItem('historial')!)
  //   };
  // }
}
//con el signo de
// informacion le digo a ts q confie en en mi q si o si devuelve algo
