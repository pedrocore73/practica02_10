import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  urlEquipo = environment.urlEquipo;

  constructor(private http: HttpClient) { }

  getEquipo(){
    return this.http.get(this.urlEquipo).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

}
