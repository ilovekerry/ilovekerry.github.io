import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient} from "@angular/common/http";
@Injectable()
export class HomeService {
  private getTvUrl = './assets/mock-data/tv.json';
  constructor(
    private http: HttpClient
  ) {}
  getTvData(): Observable<any> {
    return this.http.get<any>(this.getTvUrl);
  }
}
