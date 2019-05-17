import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Portfolio } from './portfolio.model';
import { Observable } from 'rxjs';

// injectable declaration
@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  constructor(private httpClient: HttpClient) { }

  // points to an internal API (see environment.ts + environment.prod.ts)
  get():Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(environment.apiUrl);
  }
}
