import { Component, Inject, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotion: Promotion;
  promotionErrMess: string;
  leader: Leader;
  leaderErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(
      dish => this.dish = dish,
      errmess => this.dishErrMess = errmess
      );
    this.promotionservice.getFeaturedPromotion().subscribe(
      prom => this.promotion = prom,
      errmess => this.promotionErrMess = errmess
      );
    this.leaderService.getFeaturedLeader().subscribe(
      leader => this.leader = leader,
      errmess => this.leaderErrMess = errmess
      );
  }
}
