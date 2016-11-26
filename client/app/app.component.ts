import { Component } from '@angular/core';

import { TwitterService } from './twitter.service';
import { FollowersComponent } from './followers.component';
import { TweetsComponent } from './tweets.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ 
    TwitterService 
    ]
})


export class AppComponent {
  title = 'Twitter';
}