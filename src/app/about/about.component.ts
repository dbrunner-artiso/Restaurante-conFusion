import { Component, Inject, OnInit } from '@angular/core';
import { expand, flyInOut } from '../animations/app.animation';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Array<Leader>;
  leaderErrMess: string;

  constructor(private leaderService: LeaderService, private location: Location, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(
      about => this.leaders = about,
      errmess => this.leaderErrMess = errmess);
  }

  goBack(): void {
    this.location.back();
  }
}
