import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto'

@Component({
  selector: 'app-crop-statistics',
  templateUrl: './crop-statistics.component.html',
  styleUrls: ['./crop-statistics.component.scss']
})
export class CropStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.createBarChart();
  }

  createBarChart(): void {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx:any = canvas.getContext('2d');
    
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'], // Replace with your labels
      datasets: [{
        label: 'Bar Chart',
        data: [10, 20, 30], // Replace with your data values
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Example color
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Example border color
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    };
  
    const config:any = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    new Chart(ctx, config);
  }
  

}
