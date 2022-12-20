import { Component, OnInit } from '@angular/core';
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

  constructor(private leaderService: LeaderService, private location: Location) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(about => this.leaders = about);
  }

  goBack(): void {
    this.location.back();
  }
}
