import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [93500, 102345, 103452, 107843, 109230, 108756],
      label: 'Earnings ($)',
      lineTension: 0,
    }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 95, 135, .2)',
      borderColor: 'rgba(0, 95, 135, .7)',
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit() {
  }

}
