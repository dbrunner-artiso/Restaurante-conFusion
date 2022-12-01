import {Observable, of} from 'rxjs';

import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { Injectable } from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(element => element.id == id )[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(element => element.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish=>dish.id));
  }
}
