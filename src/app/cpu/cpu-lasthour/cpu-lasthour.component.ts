import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/servicios/equipo.service';

@Component({
  selector: 'app-cpu-lasthour',
  templateUrl: './cpu-lasthour.component.html',
  styleUrls: ['./cpu-lasthour.component.css']
})
export class CpuLasthourComponent implements OnInit {

  equipo = {};

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipoService.getEquipo()
                  .subscribe((res:any)=>{
                    this.equipo = res;
                    console.log(this.equipo);
                  },(err:any)=>{
                    console.log(err);
                  })
  }

}
