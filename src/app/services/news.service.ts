import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSubscribe } from '../model/user-subscribe.model';

interface NewsResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private endpointUrl = 'http://localhost:8080/usersubscribe';

  constructor(private http: HttpClient) { }

  sendData(userSubscribe: UserSubscribe): Observable<NewsResponse> {
    return this.http.post<NewsResponse>(this.endpointUrl, userSubscribe);
  }
}
