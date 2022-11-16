import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Array<Leader>;

  constructor(private leaderService: LeaderService, private location: Location) { }

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders();
  }

  goBack(): void {
    this.location.back();
  }
}
