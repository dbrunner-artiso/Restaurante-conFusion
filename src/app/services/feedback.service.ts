import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Feedback } from '../shared/feedback';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedback(): Observable<Feedback[]> {
    const value = this.http.get<Feedback[]>(baseURL + 'feedback');
    return value;
  }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions);
  }
}
