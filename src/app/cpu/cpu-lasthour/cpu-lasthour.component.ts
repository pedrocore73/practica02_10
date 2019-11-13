import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { UsocpuService } from 'src/app/servicios/usocpu.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cpu-lasthour',
  templateUrl: './cpu-lasthour.component.html',
  styleUrls: ['./cpu-lasthour.component.css']
})
export class CpuLasthourComponent implements OnInit {

  chartOptions = { responsive: true };

  equipo = {};
  cpulasthour: any;
  percentLastUsoCpu: number;
  chartLastUsoCpu:any = [];

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
                      this.cpulasthour = res.cpulasthour;
                      this.percentLastUsoCpu = this.cpulasthour[0].regUsoCpu * 100;
                      this.loadLastUsoCpu();
                    },(err:any)=>{
                      console.log(err);
                    })
  }

  loadLastUsoCpu() {
    let uso = this.percentLastUsoCpu;
    let libre = 100 - this.percentLastUsoCpu;
    this.chartLastUsoCpu = new Chart('grafico1', {
      type: 'pie',
      data: {
        labels: ['en uso', 'libre'],
        datasets: [
          {
            backgroundColor: ['#ffc107','transparent'],
            data: [uso,libre]
          }
        ]
      }
    })
  }

}
