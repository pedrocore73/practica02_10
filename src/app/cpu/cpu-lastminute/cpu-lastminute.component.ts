import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipoService } from 'src/app/servicios/equipo.service';
import { UsocpuService } from 'src/app/servicios/usocpu.service';
import { Chart } from 'chart.js';
import { RedondeoService } from 'src/app/servicios/redondeo.service';

@Component({
  selector: 'app-cpu-lastminute',
  templateUrl: './cpu-lastminute.component.html',
  styleUrls: ['./cpu-lastminute.component.css']
})
export class CpuLastminuteComponent implements OnInit, OnDestroy {

  chartOptions = { responsive: true };

  equipo = {};
  cpulastminute: any;
  percentLastUsoCpu: number;
  chartLastUsoCpu:any = [];
  chartLastMinuteUsoCpu:any = [];

  timer: any;

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
    this.usocpuService.getUsoCpuRT()
            .subscribe((res:any)=>{
                this.cpulastminute = res.cpulastminute;
                this.percentLastUsoCpu = this.cpulastminute[0].regUsoCpu * 100;
                this.loadLastUsoCpu();
                this.loadLastMinuteUsoCpu();
              },(err:any)=>{
                console.log(err);
              }) 
    this.timer = setInterval(()=>{
      this.usocpuService.getUsoCpuRT()
      .subscribe((res:any)=>{
          this.cpulastminute = res.cpulastminute;
          this.percentLastUsoCpu = this.cpulastminute[0].regUsoCpu * 100;
          this.loadLastUsoCpu();
          this.loadLastMinuteUsoCpu();
        },(err:any)=>{
          console.log(err);
        }) 
    }, 1000)       
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
    this.chartLastUsoCpu = new Chart('grafico3', {
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

  loadLastMinuteUsoCpu() {
    let minutos = [];
    let usosCPU = [];
    this.cpulastminute.forEach((registro)=>{
      minutos.push( ('0' + new Date(registro.fecha).getMinutes()).slice(-2) + "' " 
                    +  ('0' + new Date(registro.fecha).getSeconds()).slice(-2)) + "''";
      usosCPU.push(this.redondeoService.getRedond(registro.regUsoCpu * 100, 2));              
    })
    minutos.reverse();
    usosCPU.reverse();
    this.chartLastMinuteUsoCpu = new Chart('grafico4', {
      type: 'line',
      data: {
        labels: minutos,
        datasets: [
          {
            data: usosCPU,
            label: '%',
            borderColor: '#ffc107'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }],    
        }
      }
    })
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
