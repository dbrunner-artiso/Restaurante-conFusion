import { Component, Inject, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion().subscribe(prom => this.promotion = prom);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }
}
