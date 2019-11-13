import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsocpuService {

  urlUsoCpu = environment.urlUsoCpu;

  constructor(private http: HttpClient) { }

  getUsoCpu() {
    return this.http.get(this.urlUsoCpu)
                  .pipe(
                    map((res:any)=>{
                      return res;
                    })
                  )
                  
  }

}
