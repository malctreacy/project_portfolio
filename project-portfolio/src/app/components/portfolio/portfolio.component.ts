import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // Only assignable
  rooms = ['Room1', 'Room2', 'Room3'];
  selectedType: 'all' | 'Angular' | 'React' | 'Vue' = 'all';
  portfolios: Portfolio[];
  // constructor only used for basic initializations
  constructor(private portfolioSvc:PortfolioService) { }

  // onInit is a provided as a lifecycle hooks
  ngOnInit() {
    this.portfolioSvc.get().subscribe(data => {
      this.portfolios = data;
    });
  }

}
