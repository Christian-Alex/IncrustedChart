import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
  
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  sell:number[] = [100, 80, 90, 100, 90, 110, 80];
  date:string[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    }
  };

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.sell,
        label: 'Series A',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
      /* 
      ,{
        data: [ 50, 60, 40, 70, 90, 20, 50 ],
        label: 'Series B',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
      */
    ],
    labels: this.date
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  /*
  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }
  */
  public chargeData(){
    let ventas = [
      {'id':1,'venta':10},
      {'id':2,'venta':20},
      {'id':3,'venta':20},
      {'id':4,'venta':50},
      {'id':5,'venta':70}
    ]
    Object.keys(ventas).forEach(element => {
      this.sell.push
    });
  }

  public hideTwo():void {
    const isHidden = this.chart?.isDatasetHidden(0);
    this.chart?.hideDataset(0, !isHidden);
  }

  public changeColor():void{
    let colors = ['green','red','blue','yellow','orange']
    let newColor = Math.round(Math.random() * (colors.length - 0));
    let newBack = Math.round(Math.random() * (255 - 50));

    this.lineChartData.datasets[0].borderColor = colors[newColor];
    this.lineChartData.datasets[0].backgroundColor = 'rgba(' + newBack + ',' + newBack + ', 0, 0.3)';
    this.chart?.update();
  }

  /*
  public changeColor(): void {
    this.lineChartData.datasets[1].borderColor = 'green';
    this.lineChartData.datasets[1].backgroundColor = `rgba(0, 255, 0, 0.3)`;
    this.chart?.update();
  }
  */
}