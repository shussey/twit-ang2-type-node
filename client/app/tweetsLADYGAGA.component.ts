import { Component, OnInit } from '@angular/core';

import { Tweet } from './tweet';
import { TwitterService } from './twitter.service';
import { TwitterDateWithTimePipe } from './twitter-dates.pipe';

@Component({
  selector: 'tweets',
  templateUrl: 'app/tweets.component.html',
  styleUrls: ['app/tweets.component.css']
})

export class TweetsLADYGAGAComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];
  mode = 'Observable';

  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
    this._TwitterService.getTweetsLADYGAGA()
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  }
}
