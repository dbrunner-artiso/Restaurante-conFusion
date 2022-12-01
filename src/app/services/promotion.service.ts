import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter(element => element.id == id )[0]).pipe(delay(2000));
  }

  getFeaturedPromotion():Observable< Promotion> {
    return of(PROMOTIONS.filter(element => element.featured)[0]).pipe(delay(2000));
  }
}
