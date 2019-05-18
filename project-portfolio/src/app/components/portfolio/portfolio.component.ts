import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/services/portfolio.model';
import { transition, trigger, style, animate, query, stagger, animateChild } from '@angular/animations';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations:[
    trigger('list',[
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items',[
      transition(':enter',[
        style({ transform:'scale(0)', opacity:0}),
        animate('.0350s cubic-bezier(.8,-0.6, 0.2, 1.5)',
          style({transform:'scale(1)', opacity: 1})),
      ])
    ])
  ]
})

export class PortfolioComponent implements OnInit {

  types: string[];
  // Only assignable
  private _selectedType: string = 'all';
  // getter method for selected types
  get selectedType(){
    return this._selectedType;
  }
  // setter method for new grouping
  set selectedType(newValue:string){
    if(newValue !== this._selectedType){
      this._selectedType = newValue;
      this.loadPortfolios(this._selectedType);
    }
  }

  portfolios: Portfolio[];

  // constructor only used for basic initializations
  constructor(private portfolioSvc:PortfolioService, private route: ActivatedRoute) { }

  // onInit is a provided as a lifecycle hooks
  ngOnInit() {
    // activate route contains routing information
    // snapshot is a non-observable version of queryParamMap
    const filter = this.route.snapshot.queryParamMap.get('filter');
    if (filter) {
      this._selectedType = filter;
    }
    this.loadPortfolios(this._selectedType);
  }

  loadPortfolios(selectedType:string) {
    this.portfolioSvc.get().subscribe(data => {
      // check that the first index of the value is a distinct value
      this.types=data.map(p=>p.type).filter((value, index, self) => self.indexOf(value) === index);
      this.portfolios = data.filter(p=>p.type === selectedType || selectedType === 'all');
    });
  }

}
