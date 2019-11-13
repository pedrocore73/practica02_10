import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { UsocpuService } from 'src/app/servicios/usocpu.service';

@Component({
  selector: 'app-cpu-lasthour',
  templateUrl: './cpu-lasthour.component.html',
  styleUrls: ['./cpu-lasthour.component.css']
})
export class CpuLasthourComponent implements OnInit {

  equipo = {};
  cpulasthour: any;

  constructor(private equipoService: EquipoService,
              private usocpuService: UsocpuService) { }

  ngOnInit() {
    this.equipoService.getEquipo()
                  .subscribe((res:any)=>{
                    this.equipo = res;
                    console.log(this.equipo);
                  },(err:any)=>{
                    console.log(err);
                  })
    this.usocpuService.getUsoCpu()
                  .subscribe((res:any)=>{
                      this.cpulasthour = res;
                      console.log(this.cpulasthour);
                    },(err:any)=>{
                      console.log(err);
                    })
  }

}
