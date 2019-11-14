import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { UsocpuService } from 'src/app/servicios/usocpu.service';
import { Chart } from 'chart.js';
import { RedondeoService } from 'src/app/servicios/redondeo.service';

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
  chartLastHourUsoCpu:any = [];

  // camelCase // DobleCamelCase // snake_case // wTfckCaSe :)

  constructor(private equipoService: EquipoService,
              private usocpuService: UsocpuService,
              private redondeoService: RedondeoService) { }

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
                      this.loadLastHourUsoCpu();
                    },(err:any)=>{
                      console.log(err);
                    })
  }

  loadLastUsoCpu() {
    let uso =  this.redondeoService.getRedond(this.percentLastUsoCpu, 2);           
    let libre = 100 - this.redondeoService.getRedond(this.percentLastUsoCpu, 2);
    let color;
    if(uso > 75){
      color = '#dc3545';
    } else if (uso > 25){
      color = '#ffc107';
    } else {
      color = '#28a745';
    }
    this.chartLastUsoCpu = new Chart('grafico1', {
      type: 'pie',
      data: {
        labels: ['en uso', 'libre'],
        datasets: [
          {
            backgroundColor: [color,'transparent'],
            data: [uso,libre]
          }
        ]
      },
      options: {
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 20,
            padding: 20,
            fontColor: 'white'
          }
        }
      }
    })
  }

  loadLastHourUsoCpu() {
    let horas = [];
    let usosCPU = [];
    this.cpulasthour.forEach((registro)=>{
      horas.push( ('0' + new Date(registro.fecha).getHours()).slice(-2) + ':' 
                    +  ('0' + new Date(registro.fecha).getMinutes()).slice(-2));
      usosCPU.push(this.redondeoService.getRedond(registro.regUsoCpu * 100, 2));              
    })
    horas.reverse();
    usosCPU.reverse();
    this.chartLastHourUsoCpu = new Chart('grafico2', {
      type: 'line',
      data: {
        labels: horas,
        datasets: [
          {
            data: usosCPU,
            label: '%',
            borderColor: '#ffc107'
          }
        ]
      }
    })
  }

}
