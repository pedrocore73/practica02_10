import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedondeoService {

  constructor() { }

  //                                                 decimales
  //                             redondeo( valor * 10           )
  // redondeoconDecimales  =  -------------------------------
  //                                              decimales
  //                                           10

  getRedond(valor, decimales) {
    let valorRedond;
    let factor = Math.pow(10, decimales);
    valorRedond = Math.round(valor * factor) / factor;
    return valorRedond;
  }

}
