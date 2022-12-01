import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {


    dish: Dish;

    constructor(private dishService: DishService, private location: Location, private router: ActivatedRoute) { }

    ngOnInit():void {
        const id =  this.router.snapshot.params['id'];
        this.dishService.getDish(id).subscribe(dish => this.dish = dish);
    }

    goBack(): void {
        this.location.back();
    }
}
